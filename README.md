explicu
===========

# repository for explicu project

You can view the production version of the site at http://www.explicu.com. It has an intuitive user inference and the usage is self-explanatory.  There are also instructions on the site for how to proceed. There is a navigation bar at the top of the webpage which includes links to any component of the project, from any given page of the site. All visualizations on there have an interactive component. Please follow instructions laid out on the web page to proceed. 

If you wish to install the app on your own machine, it is possible but will be cumbersome for you. We strongly advise against trying to explore the software this way. 
We implemented an extensive javascript back end in order to launch a web server to host the site. If you still wish to install the software, you must install node.js as well as node package manager. Next you will need to install all node.js modules required. 
    
    $ git clone https://github.com/rchenmit/explicu.git
    $ sudo apt-get install -y nodejs
    $ sudo apt-get install npm
    $ cd explicu
    $ npm install
    $ npm start
