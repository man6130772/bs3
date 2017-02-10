<%@page import="java.io.IOException"%>
<%@page import="java.awt.Font"%>
<%@page import="javax.imageio.ImageIO"%>
<%@page import="java.io.OutputStream"%>
<%@page import="java.awt.Graphics"%>
<%@page import="java.awt.image.BufferedImage"%>
<%@page import="java.util.Random"%>
<%@page import="java.awt.Color"%>
<%@ page language="java" pageEncoding="UTF-8"%>

<%!
private  String[] rNum = { 
		
		"0", "1", "2", "3", "4", "5", "6","7", "8", "9"
/*
		, 
		"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
		"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
		"y", "z"

		, 
		"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
		"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X",
		"Y", "Z" 
		*/
};

private  String[] rChar = {
	"O","*","X","o","l","x","z","-","|","~","#",".",":",";","囧","Orz","呵","哈"
};
private String[] fontType={
		"sans-serif","Arial","Helvetica","Microsoft YaHei"
};

private  Color[] fontColors = {
		new Color(205, 220, 57),
		new Color(63, 81, 181),
		new Color(103, 58, 183),
		new Color(255, 152, 0),
		new Color(3, 169, 244),
		new Color(171, 71, 188),
		new Color(255,152, 0),
		new Color(255, 87, 34),
		new Color(22, 22, 22),
		new Color(66, 66, 66),
		new Color(88, 88, 88),
		new Color(100, 100, 100)
};
private  Color[] fontColors2 = {
};

private  int[] style = { 0, 1, 2, 1, 3, 2, 3 };

class ValidateCode {
		
		private String number = "";
		private Random rd=new Random();
		
		private Color getRandColor(Color[] colors) {
			return colors[rd.nextInt(colors.length)];
		}

		public BufferedImage create(int width,int height) {
			BufferedImage pic = new BufferedImage(width, height,  BufferedImage.TYPE_INT_ARGB);
			Graphics gc = pic.getGraphics();
			gc.setColor(new Color(255,255,255,0));
			gc.fillRect(0, 0, width, height);
			//gc.setColor(Color.WHITE);
			//gc.drawLine(0, 30, 90, 10);
			int size=width/10;
			int x=width/4;
			int y=height/2;
			for (int i = 0; i < size; i++) {
				gc.setColor(getRandColor(fontColors));
				gc.setFont(new Font(fontType[rd.nextInt(fontType.length)], style[rd.nextInt(style.length)], y/4+rd.nextInt(3)));
				String c1="";
				String c2="";
				if(i%2==0){
					c1=rChar[rd.nextInt(rChar.length)];
					c2=rNum[rd.nextInt(rNum.length)];
				}else{
					c1=rNum[rd.nextInt(rNum.length)];
					c2=rChar[rd.nextInt(rChar.length)];
				}
				
				gc.drawString(c1, ( 5+ i * size) - rd.nextInt(5), rd.nextInt(y/2));
				gc.drawString(c2, ( 5+ i * size) - rd.nextInt(5), y + 10 + rd.nextInt(y/2));
			}
			for (int i = 0; i < 4; i++) {
				String temp = rNum[rd.nextInt(rNum.length)];
				this.number += temp;
				gc.setColor(getRandColor(fontColors));
				gc.setFont(new Font(fontType[rd.nextInt(fontType.length)], style[rd.nextInt(style.length)], 10+y/2+rd.nextInt(3)));
				gc.drawString(temp, ( 5+ i * x) - rd.nextInt(5), y + rd.nextInt(5));
			}
			gc.dispose();
			return pic;
		}

		public String getNumber() {
			return this.number;
		}

		public void setNumber(String number) {
			this.number = number;
		}
	}

	public void getVCode(HttpServletResponse response, HttpServletRequest request, String key,int width,int height)throws IOException {
		HttpSession session = request.getSession();
		ValidateCode vcode = new ValidateCode();
		BufferedImage pic = vcode.create(width,height);
		response.addHeader("Pragma", "No-cache");
		response.addHeader("Cache-Control", "no-cache");
		response.addDateHeader("expires", 0L);
		response.setContentType("image/png");
		// contentType="text/html; charset=ISO-8859-1"
		response.setCharacterEncoding(null);
		String code = vcode.getNumber();
		session.setAttribute(key, code);
		OutputStream os = response.getOutputStream();
		ImageIO.write(pic, "png", os);
	}
%>

<%
try{
	
	Integer width=Integer.parseInt(request.getParameter("w"));
	Integer height=Integer.parseInt(request.getParameter("h"));
	
	getVCode(response, request, "vcode_value",width==null?90:width,height==null?50:height);
}catch(IOException e){
	e.printStackTrace();
}
%>