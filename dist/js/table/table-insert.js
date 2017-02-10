!function($) {
	var insertEmptyCell = function(target, position) {
		var px = position[0],
			py = position[1],
			$targetRow = $(target).find('tr:eq('+py+')');

		var html =  '<td>' +
						'<input type="text" class="form-control" />' +
					'</td>';
		
		var $td = $targetRow.find('td:eq('+px+')');
		var rowDeleteBtn = '<a class="btn btn-icon row-delete-btn" title="删除行" rel="tooltip"><i class="fa fa-remove"></i></a>';
		var columnDeleteBtn = '<a class="btn btn-icon column-delete-btn" title="删除列" rel="tooltip"><i class="fa fa-remove"></i></a>';
		if($td.length == 0) {
			var maxCol = $(target).find('tr:last').find('td').length;
			if(px != maxCol-1) {
				$(html).appendTo($targetRow);
			} else {
				$('<td class="text-center">'+rowDeleteBtn+'</td>').appendTo($targetRow);
			}
		} else {
			if($targetRow.find('td[field="addRow"]').length == 0) {
				$(html).insertBefore($td);
			} else {
				$('<td class="text-center">'+columnDeleteBtn+'</td>').insertBefore($td);
			}
		}
	}

	var insertColumn = function(object) {
		var $elHeader = this.$elHeader,
			$elBody = this.$elBody,
			$addColumn = this.$addColumn,
			colNum = $elHeader.find("th").length;
			rowNum = $elBody.find("tr").length;

		var html =  '<' + object.tagName + '>' + 
						object.value + 
					'</' + object.tagName + '>';
		var cell;
		if(object.tagName == "th") {
			if(colNum==0) {
				cell = this.$addColumn = $(html).appendTo($elHeader);
			} else {
				if($addColumn) cell = $(html).insertBefore($addColumn);
			}
			
			for(var i=0;i<rowNum;i++) {
				insertEmptyCell($elBody[0], [colNum - 1, i]);
			}
		}
		
		if(object.field) cell.attr("field", object.field);
	}

	var insertRow = function(data) {
		var $elHeader = this.$elHeader,
			$elBody = this.$elBody,
			$addRow = this.$addRow,
			colNum = $elHeader.find("th").length,
			rowNum = $elBody.find("tr").length,
			$row = $addRow? $('<tr></tr>').insertBefore($addRow.parent()) : $('<tr></tr>').appendTo($elBody);

		var cell;
		if(typeof data == "object") {
			var columnDeleteBtn = '<a class="btn btn-icon column-delete-btn" title="删除列" rel="tooltip"><i class="fa fa-remove"></i></a>';
		 	// 新增表格模式
		 	if(data.field === false) {
		 		var html =  '<' + data.tagName + '>' + 
								data.value + 
							'</' + data.tagName + '>';
		 		for(var i=0;i<colNum;i++) {
		 			if(i==0) {
		 				cell = this.$addRow = $(html).appendTo($row);
		 				cell.attr("field", "addRow");
		 			} else if(i==colNum-1) {
		 				$('<td></td>').appendTo($row);
		 			} else {
		 				$('<td class="text-center">'+columnDeleteBtn+'</td>').appendTo($row);
		 			}
		 		}
		 		return;
		 	}
		 	// 初始化数据模式
		 	if(data.columns){
		 		var columns = data.columns;
		 		var colLen = columns.length;
		 		var content = this.Options.mode=='preview' ? '<div class="cell"></div>' : '<input type="text" class="form-control" />';
				var html =  '<td>' +content+ '</td>';
		 		for(var i=0;i<=colLen;i++) {
		 			var column = columns[i];
		 			if(i==colLen) {
			 			if(this.Options.mode!='preview'){
		 					$('<td class="text-center">'+columnDeleteBtn+'</td>').appendTo($row);
		 				}
		 			} else {
		 				cell = $(html).appendTo($row);
		 				cell.attr("field", column.field);
		 				if(this.Options.mode=='preview'){
		 					cell.find('.cell').text(column.value);
		 				}else{
		 					cell.find('input').val(column.value);
		 				}
		 			}
		 		}
		 		return;
		 	}
		}
		if(typeof data == "undefined") {
			for(var i=0;i<colNum;i++) {
				insertEmptyCell($elBody[0], [i, rowNum - 1]);
			}
		}
	}

	var tableinsert = function(target, options) {

	}

	tableinsert.prototype.init = function(options) {
		var Constructor = $(this).data("tableinsert").Constructor;
		Constructor.initContainer.call(this, options);
		Constructor.initHeader.call(this, options);
		Constructor.initBody.call(this, options);
	}

	tableinsert.prototype.initContainer = function(options) {
		var tableinsert = $(this).data("tableinsert");
		tableinsert.$el = $(this);
		tableinsert.$elHeader = $(this).find("thead").length > 0? $(this).find("thead") : $("<thead>").appendTo(this);
		tableinsert.$elBody = $(this).find("tbody").length > 0? $(this).find("tbody") : $("<tbody>").appendTo(this);
		tableinsert.$elFooter = $(this).find("tfoot").length > 0? $(this).find("tfoot") : $("<tfoot>").appendTo(this);
	}

	tableinsert.prototype.initHeader = function(options) {
		var tableinsert = $(this).data("tableinsert"),
			$elHeader = tableinsert.$elHeader,
			$elBody = tableinsert.$elBody;

		//插入添加按钮
		var addCell = {
			tagName: 'th',
			field: 'addColumn',
			value: '<a class="btn btn-default btn-block column-add-btn" href="javascript:;" title="添加列" rel="tooltip"><i class="fa fa-plus"></i></a>'
		}
		if(options.mode!='preview'){
			insertColumn.call(tableinsert, addCell);
		}

		//遍历头部
		if(options.header.length > 0) {
			$.each(options.header, function(i, col) {
				var value = col.value.indexOf('input')!=-1 || options.mode=='preview' ? 
							col.value : 
							'<input type="text" class="form-control" value="'+col.value+'">';
				var cell = {
					tagName: 'th',
					field: col.field,
					value: value
				}
				insertColumn.call(tableinsert, cell);
			});
		}
		
		$elHeader.on('click.addColumn', '.column-add-btn', function(e){
			$('.column-add-btn',$elHeader).tooltip('hide');
			var colNum = $elHeader.find("th").length - 1;
			var cell = {
				tagName: 'th',
				field: 'Column' + colNum,
				value: '<input class="form-control" value="未命名" />'
			}
			insertColumn.call(tableinsert, cell);
		});
	}

	tableinsert.prototype.initBody= function(options) {
		var tableinsert = $(this).data("tableinsert"),
			$elHeader = tableinsert.$elHeader,
			$elBody = tableinsert.$elBody;

		//插入添加按钮
		var addCell = {
			tagName: 'td',
			field: false,
			value: '<a class="btn btn-default btn-block row-add-btn" href="javascript:;" title="添加行" rel="tooltip"><i class="fa fa-plus"></i></a>'
		}
		if(options.mode!='preview'){
			insertRow.call(tableinsert, addCell);
		}

		//遍历表体数据
		if(options.body && options.body.length > 0) {
			$.each(options.body, function(index, item) {
				insertRow.call(tableinsert, item);
			});
		}

		// 添加行
		$elBody.on('click.addRow', '.row-add-btn', function(e){
			$('.row-add-btn',$elBody).tooltip('hide');
			insertRow.call(tableinsert);
		});

		// 删除行
		$elBody.on('click.deleteRow', '.row-delete-btn', function(e){
			$('.row-delete-btn',$elBody).tooltip('hide');
			var $tr = $(e.target).closest('tr');
            bootbox.confirm("确定要删除该行吗？", function(result){
            	if(result){
	            	$tr.remove();
            	}
            });
		});

		// 删除列
		$elBody.on('click.deleteColumn', '.column-delete-btn', function(e){
			var columnIndex = $(e.target).closest('td').index();
			var $thead = $(e.target).closest('tbody').siblings('thead');
			var $trs = $(e.target).closest('tbody').children('tr');
			
			$('.column-delete-btn',$elBody).tooltip('hide');
            bootbox.confirm("确定要删除该列吗？", function(result){
            	if(result){
            		$thead.children('th').eq(columnIndex).remove();
	            	$trs.each(function() {
	            		$(this).children('td').eq(columnIndex).remove();
	            	});
            	}
            });
		});
	}


    $.fn.tableinsert = function(options) {
        var $table = $(this), options;
        if(typeof $table.data("tableinsert") === "undefined") {
        	options = $.extend(true, {}, $.fn.tableinsert.defaults, options);
        	$table.data()["tableinsert"] = {
        		Options: options,
        		Defaults: $.fn.tableinsert.defaults
        	}
        	$table.data("tableinsert").Constructor = new tableinsert(this, options);
        } else {
        	options = $.extend(true, $table.data("tableinsert").Options, options);
        }
        var Constructor = $table.data("tableinsert").Constructor;
        Constructor.init.call(this, options);
    }

    $.fn.tableinsert.defaults = {
		header: []
	};
}(jQuery);
