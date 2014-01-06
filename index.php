<!DOCTYPE html>
<html>
    <head>
        <meta charset=UTF-8">
        <title>Mateusz Wilk - jQuery Plugin</title>
         
        <script src="js/jquery-1.9.1.js" type="text/javascript"></script>
        <script src="js/wolfie_validator.js" type="text/javascript"></script>
        
        <link href=' http://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
        <link href="css/style.css" rel="stylesheet"/>   
        
        <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
        
         <script type="text/javascript" language="javascript">
          //Our validation script will go here.
          $(document).ready(function(){
              //validation implementation will go here.
              $("#form").wolfie_validator({color: '#aa1e23'});
          })
      </script>
    </head>
    
    <body>
        
        <div id="wrap">
            <img class="plaster_45 opacity" src="images/plaster_45.png"/>
            <div id="logo">
                <img class="roche_logo" src="images/roche_logo.png" alt="Roche" />
            </div>
            <div class="clear"></div>
            <div id="main_frame">
                
                <header>
                    <nav class="topnav">
                        <ul>
                            <li><a href="#">about</a></li>
                            <li>|</li>
                            <li><a href="#">contact</a></li>
                            <li>|</li>
                            <li><a href="#">help</a></li>
                        </ul>
                    </nav>
                </header>
                
                <div id="content">
                    <section>
                        <div id="title">Contact our department</div>
                        <p>
                            Donec vitae feugiat sapien. Duis accumsan nisl in odio porttitor eget tempor nisl lacinia. Vestibulum ante ipsum primis in faucibus.
                        </p>
                        <form method="post" action="/Roche" id="form" novalidate>
                            <label>
                                Subject*
                            </label>
                            <select class="stretch_horizontal stretch_vartical" name="subject" required>
                                <option value="" selected>Please select</option>
                                <optgroup label="Human Resources">
                                    <option value ="career">Career Development Unit</option>
                                    <option value ="employee">Employee Relations and Advisory Services Unit</option>
                                    <option value ="payroll">Payroll Unit</option>
                                </optgroup>
                                <optgroup label="Information Technology">
                                    <option value ="technologies">Technologies end Solutions</option>
                                    <option value ="other">Other</option>
                                </optgroup>
                            </select>
                            <p>
                                <label>
                                    Email*
                                </label>
                                <input class="stretch_horizontal stretch_vartical box_sizing" type="email" name="email" placeholder="type yout email..." required>
                            </p>
                            <p>
                                <input type="radio" value="one" name="radio1">vestibulum ante ipsum primis
                                <input type="radio" value="two" name="radio2">duis accumsan nisl portitor
                            </p>
                            <p>
                                <label>
                                    Your Message
                                </label>
                                <textarea class="stretch_horizontal box_sizing" name="message"></textarea>
                            </p>
                            <p>
                                <input type="checkbox" value="terms" name="terms">I agree sed acru a <a href="#">tellus henderit</a> imperdeit nulla
                            </p>
                            <input class="submitbtn" type="submit" value="submit" name="submit">
                        </form>
                    </section>

                </div>

                <aside id="right_column">
                        <img class="plaster opacity" src="images/plaster_top.png"/>
                        <img src="images/image.png" alt="People in Roche" />
                        <img class="plaster opacity" src="images/plaster_bottom.png"/>
                        <p class="aside_title">
                            21.12.2014 - Drug of the week
                        </p>
                        <p>
                            Donec vitae feugiat sapien. Duis accumsan nisi in odio porttitor eget empor nisl lacinia.
                        </p>
                        <p>
                            Vestibulum ante ipsum primis in faucibus orci lectus et ultrices posuere cubilia Curae.
                        </p>
                        <div class="info">
                            <div style="position:relative"><img src="images/bulb.png" alt="Info" />
                                <span style="position:absolute;top:4px;"><b>Did you know?</b><span>
                            </div>
                            <p>
                                Mauris sit amet tellus dui, eget lacinia augue. Etiam imperdiet
                            </p>
                            <p class="read_more">
                                <a href="#">read more</a>
                            </p>
                            <div class="clear"></div>
                        </div>
                </aside>
                <img class="plaster_90 opacity" src="images/plaster_90.png"/>
                <div class="clear"></div>
            </div>
            <footer>
                <div style="margin-top: 20px;">
                <a href="#" class="nodecoration">F.Hoffmann-La Roche Ltd</a>
                <nav class="bottomnav">
                    <ul>
                        <li><a href="#">Privacy statement</a></li>
                        <li>|</li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </nav>
                </div>
            </footer>
            
        </div>
        
    </body>
</html>
