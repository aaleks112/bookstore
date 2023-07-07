Estructura base:
* Se divide en capas para ayudar a separar las responsabilidades y de lo que se tiene que hacer cargo.

1) CONTROLLERS: Se encarga de manejar la respuesta de la API, no tiene lógica de negocio
2) SERVICES: Encontramos la logica de negocio (no sabe que existe sequelize) para ello requiero los al providers (que es el que sabe crear al usuario)
3) PROVIDERS: Define las acciones a realizar en nuestro modelo. Se encarga de la llamada a servicios externos(nuestra BBDD).Es el único que conoce sequelize.no tiene lógica de negocio. Requiere de la capa models.
4) MODELS: P/crear,definir nuestros datos, como se van a representar.
5) ROUTES: Rutas definidas con el objeto router p/q cada archivo corresponda a un área específica de la API - en el archivo de la app tenemos definidas las rutas principales 