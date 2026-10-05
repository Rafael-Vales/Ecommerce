# Demo para portfolio

Ejecutar `npm run dev:demo` y abrir http://localhost:3012.

El modo se activa solamente con `NEXT_PUBLIC_DEMO_MODE=true`. Para desplegar una demo se debe definir esa variable en el entorno de build y runtime. Sin ella se conserva el catálogo de base de datos.

El catálogo muestra 16 productos con las fotos proporcionadas en FOTO PRODUCTO. Los nombres corresponden a los envases. Los precios son ejemplos y no representan inventario ni precios actuales. Las presentaciones cuyo peso no es legible se indican como “Bolsa”.

Catálogo, búsqueda, filtros, variantes, favoritos y carrito usan los componentes existentes. La confirmación de compra es local y simulada, vacía el carrito y no genera pedidos ni cobros. El endpoint de checkout también rechaza operaciones en modo demo.

Cuentas, pagos y pedidos reales requieren recuperar la infraestructura. Esta demo no los habilita. No se modificó ninguna base de datos ni se publicó en Vercel.

En /login, Autocompletar rellena demo@losabuelos.example y DemoAbuelos2026! sin enviar el formulario. Iniciar sesión utiliza la simulación local existente. El botón aparece solo en modo demo.
