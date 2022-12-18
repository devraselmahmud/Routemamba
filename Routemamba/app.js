routemamba.registerServerHost('http://127.0.0.1:5500/');

routemamba.registerMetaUrl('components/meta/meta-content.html');

routemamba.register_http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "components/Home.html",
        container: "#root",
        preloader: '<h2>loading...</h2>',
        data: {},
        error_content: '<h1>error</h1>',
        http_url_change: false,
        http_url: ""
     },

     {
        method: "GET",
        meta_loader: true,
        content_url: "components/Home.html",
        container: "#root",
        preloader: '<h2>loading...</h2>',
        data: {},
        error_content: '<h1>error</h1>',
        http_url_change: false,
        http_url: "index.html"
     },


     {
        method: "GET",
        meta_loader: true,
        content_url: "components/About.html",
        container: "#root",
        preloader: '<h2>loading...</h2>',
        data: {},
        error_content: '<h1>error</h1>',
        http_url_change: false,
        http_url: "About.html"
     },

     {
        method: "GET",
        meta_loader: true,
        content_url: "components/Contact.html",
        container: "#root",
        preloader: '<h2>loading...</h2>',
        data: {},
        error_content: '<h1>error</h1>',
        http_url_change: false,
        http_url: "Contact.html"
     },

    ]);

    routemamba.register_routes_headers([
        {
            method: "GET",
            content_url: "components/header-footer/Header.html",
            container: "#header_load",
            preloader: 'loading...',
            error_content: '<h2>Error</h2>',
            http_url_change: false,
            http_url: ["/", "index.html", "About.html", "Contact.html"]
         },
    ]);

    routemamba.register_routes_footers([
        {
            content_url: "components/header-footer/Footer.html",
            container: "#footer_load",
            preloader: 'loading...',
            error_content: 'error',
            http_url: ["/","index.html", "About.html", "Contact.html"]
         },
    ]);
    

routemamba.render();
