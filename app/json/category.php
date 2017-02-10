<?php
    $node = isset($_GET['node']) ? $_GET['node'] : 6;
    $brand = isset($_GET['brand']) ? $_GET['brand'] : '百丽';
    $status = $node%4==0 ? '' : '';
    $list = array();
    for ($i=0; $i <= $node; $i++) { 
        $item = array(
            'id' => '004a39dd3f0'.$i,
            'cateNo' => 'Z201412'.$i,
            'status' => $status,
            'cateName' => $brand.$node.$i,
            'level' => 1,
            'number' => 10+$i,
        );
        array_push($list, $item);
    }
    // echo $node.'<br/>';
    echo json_encode($list);
