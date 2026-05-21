# Contexto del Proyecto

## 1) Descripcion de las tres paginas

### Pagina de inicio (/)
La vista de inicio muestra una experiencia de exploracion rapida inspirada en Airbnb. Incluye una barra superior de navegacion, buscador principal y una coleccion de alojamientos destacados. Su objetivo es ayudar al usuario a descubrir opciones de forma visual y comenzar su busqueda con pocos clics.

### Pagina de catalogo (/catalog)
La vista de catalogo presenta resultados de busqueda en formato de listado. Muestra el numero total de resultados, controles de ordenacion por precio y una distribucion responsive con tarjetas de alojamiento junto a un area de mapa. Esta pagina permite comparar opciones antes de elegir una habitacion concreta.

### Pagina de detalle de habitacion (/rooms/[id])
La vista de detalle muestra toda la informacion de un alojamiento especifico: galeria de fotos, titulo, valoracion, reseñas, ubicacion, datos del anfitrion, servicios y bloque de reserva. Esta pagina esta enfocada en la toma de decision final antes de reservar.

## 2) Componentes principales por vista

### Inicio (/)
- Navbar (logo, acciones de usuario, navegacion)
- SearchBar (entrada de destino y accion de busqueda)
- CardGrid (contenedor de tarjetas de alojamientos)
- Card (imagen, precio, rating, resumen)
- Loader (estado de carga inicial)

### Catalogo (/catalog)
- Navbar
- SearchBar
- ResultsHeader (contador de resultados)
- SortControl (orden ascendente/descendente por precio)
- Card (reutilizado desde inicio)
- MapPlaceholder (area de mapa en desktop y mobile)

### Detalle de habitacion (/rooms/[id])
- Navbar
- RoomGallery (foto principal + miniaturas + controles anterior/siguiente)
- RoomHeader (titulo, rating, reseñas, ubicacion)
- HostInfo (avatar, nombre del anfitrion, años como anfitrion)
- AmenitiesGrid (icono + etiqueta por servicio)
- BookingCard (precio por noche, contador de huespedes, CTA de reserva)
- Loader (carga simulada por id)

## 3) Usuario objetivo
La plataforma esta pensada para personas que desean encontrar y reservar alojamiento temporal de forma rapida y confiable, ya sea para vacaciones, escapadas cortas o viajes de trabajo. El usuario busca comparar opciones por precio, ubicacion y servicios, revisar evidencia visual del lugar y completar una reserva con claridad y seguridad.
