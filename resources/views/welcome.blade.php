<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="shortcut icon" type="image/png" href="{{ asset('favicon.png')}}" />
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,500i,600,700,800" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
  <script src="https://kit.fontawesome.com/e9035705ca.js" crossorigin="anonymous"></script>
    <script defer src="{{ mix('js/app-client.js') }}"></script>
    <link rel="stylesheet" type="text/css" href="{{ mix('css/style.css')}}">

  <title>Rosa Gres - Especializada en productos de Gres Porcelánico</title>
</head>

<body>

    {!! ssr('js/app-server.js')
            // If ssr fails, we need a container to render the app client-side
            ->fallback('<div id="app"></div>')
            ->render() !!}

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63103478-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-63103478-1');
    </script>
</body>

</html>
