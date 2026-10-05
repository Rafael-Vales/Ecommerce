# Demo para portfolio

Ejecutar `npm run dev:demo` y abrir http://localhost:3012. El acceso de prueba está en http://localhost:3012/login.

Esta edición de portfolio usa siempre el catálogo local y la compra simulada. Los productos están en `src/data/demo-catalog.ts` y las fotos en `public/img/products/`; ambos se incluyen en el despliegue. No hace falta configurar `NEXT_PUBLIC_DEMO_MODE` en Vercel. Para restaurar una tienda real se debe recuperar la infraestructura y cambiar explícitamente esta configuración.

El catálogo muestra 16 productos con las fotos proporcionadas en FOTO PRODUCTO. Los nombres corresponden a los envases. Los precios son ejemplos y no representan inventario ni precios actuales. Las presentaciones cuyo peso no es legible se indican como “Bolsa”.

Catálogo, búsqueda, filtros, variantes, favoritos y carrito usan los componentes existentes. La confirmación de compra es local y simulada, vacía el carrito y no genera pedidos ni cobros. El endpoint de checkout también rechaza operaciones en modo demo.

Cuentas, pagos y pedidos reales requieren recuperar la infraestructura. Esta demo no los habilita. No se modificó ninguna base de datos ni se publicó en Vercel.

En /login, Autocompletar rellena demo@losabuelos.example y DemoAbuelos2026! sin enviar el formulario. Iniciar sesión utiliza la simulación local existente. El botón aparece solo en modo demo.
