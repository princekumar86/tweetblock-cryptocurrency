// app/routes.js
var parser = require('body-parser');
var urlencodedParser = parser.urlencoded({extended : false});

module.exports = function(app, passport) {
    
        // =====================================
        // HOME PAGE (with login links) ========
        // =====================================
        //app.get('/', function(req, res) {
        //    res.render('index.ejs'); // load the index.ejs file
        //});
    
        // =====================================
        // LOGIN ===============================
        // =====================================
        // show the login form
        //app.get('/login', function(req, res) {
    
            // render the page and pass in any flash data if it exists
        //    res.render('login.ejs', { message: req.flash('loginMessage') }); 
        //});
    
        // process the login form
        // app.post('/login', do all our passport stuff here);
    
        // =====================================
        // SIGNUP ==============================
        // =====================================
        // show the signup form
        //app.get('/signup', function(req, res) {
    
            // render the page and pass in any flash data if it exists
        //    res.render('signup.ejs', { message: req.flash('signupMessage') });
        //});
    
        // process the signup form
        // app.post('/signup', do all our passport stuff here);
    
        // =====================================
        // PROFILE SECTION =====================
        // =====================================
        // we will want this protected so you have to be logged in to visit
        // we will use route middleware to verify this (the isLoggedIn function)
        app.get('/profile', isLoggedIn, function(req, res) {
            res.render('profile.ejs', {
                user : req.user // get the user out of session and pass to template
            });
        });
    
        // =====================================
        // LOGOUT ==============================
        // =====================================
        app.get('/logout', function(req, res) {
            req.logout();
            res.redirect('/');
        });

        // process the signup form
        //app.post('/signup', passport.authenticate('local-signup', {
        //    successRedirect : '/profile', // redirect to the secure profile section
        //    failureRedirect : '/signup', // redirect back to the signup page if there is an error
        //    failureFlash : true // allow flash messages
        //}));

        // process the login form
        //app.post('/login', passport.authenticate('local-login', {
        //    successRedirect : '/profile', // redirect to the secure profile section
        //    failureRedirect : '/login', // redirect back to the signup page if there is an error
        //    failureFlash : true // allow flash messages
        //}));

        // process the login form
        //app.post("/login", passport.authenticate('local-login'), function(req, res) {
        //    res.json(req.user);
        //});

        //app.post('/login', urlencodedParser, passport.authenticate('local-login', {
            //
        //}));

        app.post('/login', passport.authenticate('local-login'), function(req,res){
            res.json(req.user);
            //console.log(req.user);
        });

        app.post('/signup', passport.authenticate('local-signup'), function(req,res){
            res.json(req.user);
            console.log(req.user);
            console.log(res.user);
        });

        // =====================================
        // FACEBOOK ROUTES =====================
        // =====================================
        // route for facebook authentication and login
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
        
        // handle the callback after facebook has authenticated the user
        app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/' }),
        function(req, res) {
          // Successful authentication, redirect home.
          res.redirect('/fbcallback');
        });
        // test - //
        app.get('/check_fb_correctly_loggenin', function(req, res) {
            res.send(req.user);
        });

        // =====================================
        // TWITTER ROUTES ======================
        // =====================================
        // route for twitter authentication and login
        app.get('/auth/twitter', passport.authenticate('twitter'));
        
        // handle the callback after twitter has authenticated the user
        app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                successRedirect : '/twittercallback',
                failureRedirect : '/'
        }));
        // test - //
        app.get('/check_twitter_correctly_loggenin', function(req, res) {
            //console.log(req.user);
            res.send(req.user);
        });

        // =====================================
        // GOOGLE ROUTES =======================
        // =====================================
        // send to google to do the authentication
        // profile gets us their basic information including their name
        // email gets their emails
        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
        
        // the callback after google has authenticated the user
        app.get('/auth/google/callback',
                passport.authenticate('google', {
                        successRedirect : '/googlecallback',
                        failureRedirect : '/'
        }));

        // test - //
        app.get('/check_google_correctly_loggenin', function(req, res) {
            res.send(req.user);
        });


        // =====================================
        // LINKEDIN ROUTES =======================
        // =====================================
        // send to google to do the authentication
        // profile gets us their basic information including their name
        // email gets their emails
        app.get('/auth/linkedin',
        passport.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress'] }),
        function(req, res){
            // The request will be redirected to LinkedIn for authentication, so this
            // function will not be called.
        });

        //app.get('/auth/linkedin/callback',
        //passport.authenticate('linkedin', { failureRedirect: '/login' }),
        //function(req, res) {
        //    res.redirect('/linkedincallback');
        //});
        app.get('/auth/linkedin/callback',
        passport.authenticate('linkedin', {
                successRedirect : '/linkedincallback',
                failureRedirect : '/'
        }));
        // test - //
        app.get('/check_linkedin_correctly_loggenin', function(req, res) {
            res.send(req.user);
        });
    


    };

    
    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {
    
        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();
    
        // if they aren't redirect them to the home page
        res.redirect('/');
    }