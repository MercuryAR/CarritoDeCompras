Este proyecto pertenece al curso de FRONT-END JS, Año 2024, Comisión C24225, Alumno Paulo Orsini.

# DeporShop - E-commerce de Zapatillas Deportivas

## Descripción del Proyecto

DeporShop es un sitio web de e-commerce completo especializado en la venta de zapatillas deportivas de las principales marcas del mercado. El proyecto fue desarrollado con un enfoque en UX/UI siguiendo los principios de Design Thinking, ofreciendo una experiencia de usuario moderna, intuitiva y completamente responsive.

**Características principales:**
- 13 páginas HTML completamente funcionales
- Sistema de carrito de compras con localStorage
- Sistema de favoritos persistente
- Autenticación de usuarios (login/registro)
- Diseño responsive mobile-first
- Animaciones y transiciones fluidas
- Búsqueda de productos en tiempo real
- Validación de formularios con JavaScript

---

## Estructura del Proyecto

```
CarritoDeCompras/
│
├── index.html                    # Página principal con carrusel
├── productos.html                # Catálogo de productos con filtros
├── carrito.html                  # Página del carrito de compras
├── usuario.html                  # Perfil de usuario / Login / Registro
├── contacto.html                 # Formulario de contacto
├── sobrenosotros.html           # Información de la empresa
├── blog.html                     # Artículos del blog
├── politicadeprivacidad.html    # Política de privacidad (Ley 25.326)
├── terminosdeuso.html           # Términos y condiciones
├── preguntasfrecuentes.html     # FAQ con 13 preguntas
├── envios.html                   # Información de envíos
├── devoluciones.html            # Política de devoluciones
├── compra.html                   # (Legacy - en desuso)
│
├── css/
│   └── style.css                 # 1700+ líneas de CSS moderno
│
├── js/
│   ├── carousel.js               # Carrusel automático con touch
│   ├── contact.js                # Validación de formularios
│   ├── cart.js                   # Sistema de carrito con localStorage
│   ├── favoritos.js              # Sistema de favoritos
│   └── compra.js                 # (Legacy)
  - Email (info@deporshop.com)
│
└── img/                          # Imágenes de productos y assets

```

---

## Funcionalidades Principales

### 1. **Página de Inicio (index.html)**
- **Hero Section**: Propuesta de valor con llamado a la acción
- **Carrusel Interactivo Premium**:
  - 8 productos destacados con imágenes de alta calidad
  - Navegación automática cada 5 segundos
  - Controles manuales (flechas prev/next)
  - Indicadores de posición clicables
  - Pausa automática al hacer hover
  - Soporte táctil completo (swipe)
  - Navegación por teclado (←→)
  - Transiciones suaves con `transform`
- **Grid de Beneficios**: 4 tarjetas destacando:
  - Envío gratis en compras >$50,000
  - Pagos 100% seguros
  - Devoluciones gratis en 30 días
  - Calidad garantizada
- **Búsqueda Rápida**: Botón que abre prompt y filtra productos

### 2. **Catálogo de Productos (productos.html)**
- **8 Productos Completos**:
  1. Nike Air Max 270 React - $15,999
  2. Adidas Ultraboost 22 - $17,499
  3. Puma RS-X³ Puzzle - $12,999
  4. New Balance 574 Core - $10,999
  5. Reebok Classic Leather - $8,999
  6. Converse Chuck Taylor All Star - $6,999
  7. Vans Old Skool Platform - $9,499
  8. Asics Gel-Kayano 29 - $18,999

- **Filtros Avanzados**:
  - Búsqueda por nombre en tiempo real
  - Categorías: Running, Training, Casual, Basketball
  - Marcas: Nike, Adidas, Puma, New Balance, Reebok
  - Ordenamiento: Recientes, Precio menor/mayor, Más vendidos

- **Tarjetas de Producto**:
  - Imagen principal con hover zoom
  - Badge de estado (Nuevo, Oferta, Popular, Premium)
  - Rating con estrellas
  - Precio formateado en pesos argentinos
  - Botón "Agregar al Carrito" funcional
  - Botón "Favoritos" funcional

### 3. 🛒 **Carrito de Compras (carrito.html)** NUEVO
- **Lista de Productos**:
  - Vista detallada de cada producto agregado
  - Miniatura, nombre, categoría y precio unitario
  - Controles de cantidad (+/-)
  - Botón eliminar individual
  - Subtotal por producto calculado dinámicamente

- **Resumen del Pedido**:
  - Subtotal de todos los productos
  - Cálculo de envío:
    - $3,500 para pedidos <$50,000
    - **GRATIS** para pedidos ≥$50,000
  - Total final actualizado en tiempo real
  - Indicador visual de envío gratis alcanzado

- **Estado Vacío**:
  - Mensaje amigable con ícono
  - Botón para ir a ver productos

- **Acciones**:
  - Botón "Vaciar Carrito"
  - Botón "Seguir Comprando"
  - Botón "Finalizar Compra" (preparado para checkout)

### 4. **Usuario / Perfil (usuario.html)** NUEVO
- **Sistema de Autenticación**:
  - **Login**: Email y contraseña
  - **Registro**: Nombre completo, email, teléfono, contraseña
  - Validación de campos requeridos
  - Persistencia con localStorage

- **Perfil de Usuario**:
  - Avatar con ícono de usuario
  - Información personal:
    - Nombre completo
    - Email registrado
    - Teléfono
    - Fecha de registro
  - Botón "Editar Perfil" (preparado para futuras mejoras)
  - Botón "Cerrar Sesión"

- **Estadísticas Personales**:
  - Productos en el carrito (actualizado en vivo)
  - Productos en favoritos (actualizado en vivo)

- **Historial de Compras**:
  - Sección preparada para mostrar pedidos previos
  - Estado vacío con botón "Ver Productos"

### 5. **Contacto (contacto.html)**
- **Formulario Validado**:
  - Nombre completo (requerido)
  - Email con validación regex
  - Teléfono con formato argentino
  - Asunto seleccionable
  - Mensaje tipo textarea
  - Checkbox de términos
  - Mensaje de éxito animado

- **Información de Contacto**:
  - Dirección: Av. Corrientes 1234, CABA
  - Teléfono: +54 11 1234-5678
  - Email: info@deporshop.com
  - Horario: Lun-Vie 9:00-18:00

- **Mapa de Google Maps** embebido
- **FAQ Accordion** con 4 preguntas

### 6. **Páginas Legales y de Ayuda**

#### **Política de Privacidad (politicadeprivacidad.html)**
- Cumplimiento con Ley 25.326 de Protección de Datos Personales (Argentina)
- 11 secciones completas:
  - Recopilación de información
  - Uso de datos
  - Cookies y tecnologías
  - Compartir información con terceros
  - Seguridad de datos
  - Derechos del usuario (ARCO)
  - Modificaciones a la política
  - Contacto del responsable
- Última actualización: Diciembre 2024

#### **Términos de Uso (terminosdeuso.html)**
- 14 secciones legales:
  - Aceptación de términos
  - Uso del sitio
  - Registro de cuenta
  - Compras y pagos
  - Envíos y devoluciones
  - Propiedad intelectual
  - Limitación de responsabilidad
  - Ley aplicable y jurisdicción (Argentina)
- Protección legal para la empresa y usuarios

#### **Preguntas Frecuentes (preguntasfrecuentes.html)**
- **13 FAQ organizadas por categorías**:
  - **Compras**: Proceso de compra, métodos de pago
  - **Productos**: Autenticidad, tallas, stock
  - **Envíos**: Tiempos, costos, seguimiento
  - **Devoluciones**: Políticas, proceso, costos
  - **Soporte**: Contacto, reclamos

- **Accordion Interactivo**: Expandir/colapsar preguntas con JavaScript

#### **Información de Envíos (envios.html)**
- **Métodos de envío**:
  - Envío estándar (3-5 días hábiles): $3,500
  - Envío express (24-48hs): $5,000
  - **Envío GRATIS** en compras >$50,000
- **Zonas de cobertura**: Todo el país
- **Seguimiento de pedidos** con código
- **Retiro en sucursal** disponible

#### **Política de Devoluciones (devoluciones.html)**
- **30 días** para devoluciones sin uso
- Proceso paso a paso ilustrado
- Costos de devolución: Gratis para cambios, $2,000 para reembolsos
- Garantía por defectos de fábrica
- Formulario de solicitud de devolución

#### **Sobre Nosotros (sobrenosotros.html)**
- Historia de DeporShop
- Misión y visión
- Valores corporativos:
  - Calidad garantizada
  - Atención al cliente
  - Precios competitivos
  - Compromiso social
- Equipo y ubicación en Buenos Aires

#### **Blog (blog.html)**
- **8 artículos completos**:
  - Guías de compra
  - Consejos de running
  - Tendencias de moda deportiva
  - Cuidado de zapatillas
- Grid responsive 2-3 columnas
- Fechas de publicación
- Categorías por etiquetas

---

## Sistema Técnico Backend (localStorage)

### Recursos Externos
- **Google Fonts**: Inter y Caveat
- **SVG Icons**: Iconos vectoriales inline para mejor rendimiento
- **Google Maps Embed API**: Mapa de ubicación

## Compatibilidad

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- iOS Safari
- Chrome Android
- Responsive desde 320px hasta 1920px+

## Próximas Funcionalidades (Backend en desarrollo)

- Integración con base de datos para productos dinámicos
- Sistema de carrito de compras funcional
- Autenticación de usuarios
- Proceso de checkout completo
- Panel de administración
- API RESTful para gestión de productos

## Estructura del Proyecto

```
CarritoDeCompras/
├── Index.html          # Página principal con carrusel
├── productos.html      # Catálogo de productos con filtros
├── contacto.html       # Página de contacto con formulario
├── css/
│   └── style.css       # Estilos completos del sitio (1300+ líneas)
├── js/
│   ├── carousel.js     # Lógica del carrusel
│   ├── contact.js      # Validación de formulario
│   ├── carrito.js      # (En desarrollo)
│   └── compra.js       # (En desarrollo)
├── img/
│   ├── zapatillahombre1-8.jpeg  # Imágenes de productos
│   ├── Usuario.svg
│   ├── Carrito.png
│   ├── Facebook.svg
│   ├── Instagram.svg
│   └── X.svg
└── README.MD           # Este archivo
```

---

## Sistema Técnico Backend (localStorage)

### **cart.js - Sistema de Carrito de Compras**

Clase `ShoppingCart` completa con 11 métodos:

```javascript
class ShoppingCart {
  constructor()              // Inicializa y carga desde localStorage
  loadCart()                 // Lee 'deporshop_cart' de localStorage
  saveCart()                 // Persiste cambios en localStorage
  addItem(product)           // Agrega producto (incrementa si existe)
  removeItem(productId)      // Elimina producto del carrito
  updateQuantity(id, qty)    // Actualiza cantidad (elimina si qty<=0)
  clearCart()                // Vacía el carrito completamente
  getTotalItems()            // Suma total de unidades
  getSubtotal()              // Calcula precio * cantidad
  getShipping()              // $3,500 o $0 si >$50,000
  getTotal()                 // Subtotal + Shipping
  updateCartBadge()          // Actualiza badge en header
  showNotification(msg)      // Toast notification animado
}
```

**Características:**
- Persistencia automática con `localStorage`
- Detección de duplicados (incrementa cantidad en lugar de duplicar)
- Cálculo inteligente de envío (gratis >$50k)
- Badge actualizado en todas las páginas
- Notificaciones toast con animaciones CSS inyectadas
- Formato de precios en pesos argentinos (`Intl.NumberFormat`)

**Estructura de datos:**
```javascript
{
  id: Number,        // ID único del producto
  name: String,      // Nombre del producto
  price: Number,     // Precio unitario
  image: String,     // Ruta de la imagen
  category: String,  // Categoría/Marca
  quantity: Number   // Cantidad en el carrito
}
```

**Uso global:**
```javascript
// Disponible en window
window.cart         // Instancia global de ShoppingCart
window.addToCart(product)  // Helper para agregar
window.formatPrice(number) // Helper para formatear $
```

---

### **favoritos.js - Sistema de Favoritos**

Clase `Favorites` similar al carrito:

```javascript
class Favorites {
  constructor()              // Inicializa y carga desde localStorage
  loadFavorites()            // Lee 'deporshop_favorites'
  saveFavorites()            // Persiste en localStorage
  toggle(product)            // Agrega/elimina favorito (toggle)
  isFavorite(productId)      // Verifica si es favorito
  getAll()                   // Obtiene todos los favoritos
  getCount()                 // Cantidad de favoritos
  remove(productId)          // Elimina un favorito
  clear()                    // Limpia todos los favoritos
  updateFavoriteBadge()      // Actualiza badge en header
  updateFavoriteButtons()    // Actualiza estado visual de botones
  showNotification(msg)      // Toast notification
}
```

**Características:**
- Sistema de toggle (click para agregar/quitar)
- Estado visual en botones (corazón relleno/vacío)
- Persistencia con localStorage
- Notificaciones animadas
- Actualización automática de UI

**Estilos CSS dinámicos:**
```css
.product-card__wishlist.active {
  background: var(--color-primary);
  color: white;
}
.product-card__wishlist.active svg {
  fill: white;
  stroke: white;
}
```

**Uso global:**
```javascript
window.favorites                    // Instancia global
window.toggleFavorite(product)      // Helper para toggle
```

---

### **Sistema de Usuario (usuario.html + localStorage)**

**localStorage key:** `deporshop_user`

**Estructura de datos:**
```javascript
{
  name: String,       // Nombre completo
  email: String,      // Email único
  phone: String,      // Teléfono (opcional)
  password: String,   // En producción: hashear con bcrypt
  createdAt: String   // ISO timestamp
}
```

**Funcionalidades:**
- Registro de nuevos usuarios
- Login con email/password
- Validación de campos requeridos
- Perfil con información personal
- Estadísticas en vivo (carrito + favoritos)
- Cerrar sesión (limpia localStorage)
- Botón editar perfil (preparado para expansión)

**Nota de seguridad:** Este es un sistema de demostración frontend. En producción:
- Hashear contraseñas con bcrypt
- Usar JWT tokens
- Backend con autenticación OAuth
- HTTPS obligatorio
- Rate limiting en login

---

## Design System

### Variables CSS (50+ custom properties)

```css
/* Colores */
--color-primary: #FF6B35;
--color-secondary: #F7931E;
--color-success: #10b981;
--color-error: #ef4444;
--color-text-primary: #1A1A1A;
--color-text-secondary: #666666;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;

/* Espaciado (múltiplos de 8px) */
--space-xs: 0.5rem;   /* 8px */
--space-sm: 0.75rem;  /* 12px */
--space-md: 1rem;     /* 16px */
--space-lg: 1.5rem;   /* 24px */
--space-xl: 2rem;     /* 32px */
--space-2xl: 3rem;    /* 48px */
--space-3xl: 4rem;    /* 64px */

/* Tipografía */
--font-primary: 'Inter', sans-serif;
--font-display: 'Caveat', cursive;
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-md: 1rem;      /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-xl: 1.25rem;   /* 20px */
--font-size-2xl: 1.5rem;   /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem;  /* 36px */

/* Sombras */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15);

/* Radios */
--radius-sm: 0.375rem;  /* 6px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;      /* 16px */

/* Transiciones */
--transition-base: all 0.3s ease;
--transition-fast: all 0.15s ease;
```

### Metodología BEM

```html
<!-- Block -->
<div class="product-card">
  <!-- Element -->
  <img class="product-card__image">
  <h3 class="product-card__title"></h3>
  <!-- Element con Modifier -->
  <button class="product-card__button product-card__button--primary">
</div>
```

### Responsive Breakpoints

```css
/* Mobile First */
.container { /* Estilos base móvil */ }

@media (min-width: 576px) { /* Tablet pequeña */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 992px) { /* Desktop pequeño */ }
@media (min-width: 1200px) { /* Desktop */ }
@media (min-width: 1400px) { /* Desktop grande */ }
```

### Grid System

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-xl);
}
```

---

## Tecnologías Utilizadas

### Frontend
- **HTML5**: 
  - Semántica moderna (<header>, <main>, <section>, <article>)
  - ARIA labels para accesibilidad
  - Meta tags SEO optimizados
  
- **CSS3** (1700+ líneas):
  - Custom Properties (variables CSS)
  - Flexbox y CSS Grid
  - Animaciones con @keyframes
  - Transiciones suaves
  - Media queries responsive
  - Metodología BEM
  
- **JavaScript ES6+** (600+ líneas):
  - Clases y módulos
  - Arrow functions
  - Destructuring
  - Template literals
  - localStorage API
  - Intl.NumberFormat
  - Event delegation
  - Async operations

### Librerías y Recursos
- **Google Fonts**: Inter (300-700), Caveat (400-700)
- **SVG Icons**: Íconos personalizados inline
- **Google Maps API**: Mapa embebido en contacto

### Almacenamiento
- **localStorage** (3 keys):
  - `deporshop_cart`: Array de productos en carrito
  - `deporshop_favorites`: Array de productos favoritos
  - `deporshop_user`: Objeto con datos del usuario

---

## Cómo Usar el Proyecto

### Instalación Local

1. **Clonar el repositorio**:
```bash
git clone https://github.com/MercuryAR/CarritoDeCompras.git
cd CarritoDeCompras
```

2. **Abrir con Live Server** (recomendado):
   - Usar extensión "Live Server" de VS Code
   - Click derecho en `index.html` → "Open with Live Server"
   - Se abrirá en `http://127.0.0.1:5500`

3. **O abrir directamente**:
   - Doble click en `index.html`
   - Funciona sin servidor (archivos estáticos)

### Navegación del Sitio

```
index.html (Inicio)
├── productos.html (Catálogo)
│   ├── carrito.html (Ver carrito)
│   └── usuario.html (Login/Perfil)
│
├── contacto.html (Formulario)
│
├── sobrenosotros.html (Nosotros)
│
├── blog.html (Artículos)
│
└── Footer Links:
    ├── preguntasfrecuentes.html (FAQ)
    ├── envios.html (Info envíos)
    ├── devoluciones.html (Devoluciones)
    ├── politicadeprivacidad.html (Privacidad)
    └── terminosdeuso.html (Términos)
```

### Flujo de Compra Completo

1. **Navegar productos** en `productos.html`
2. **Buscar** productos desde cualquier página
3. **Agregar al carrito** ➜ Click en botón "Agregar"
4. **Ver carrito** ➜ Click en ícono del carrito en header
5. **Modificar cantidades** con botones +/-
6. **Ver total** con cálculo de envío automático
7. **Finalizar compra** (preparado para backend)

### Gestión de Favoritos

1. Click en en cualquier producto
2. Ícono se rellena de color
3. Ver cantidad en perfil de usuario
4. Click nuevamente para quitar

### Crear Cuenta y Login

1. Ir a `usuario.html`
2. **Registro**: Completar formulario "Crear Cuenta"
3. **Login**: Usar email y contraseña registrados
4. **Ver perfil**: Información personal y estadísticas
5. **Cerrar sesión**: Botón en la parte superior

---

## Compatibilidad

### Navegadores Soportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

### Dispositivos
- **Desktop**: 1920x1080, 1440x900, 1366x768
- **Tablet**: iPad, iPad Pro, Surface
- **Mobile**: iPhone, Android (360x640+)

### Features Utilizadas
- CSS Grid y Flexbox
- CSS Custom Properties
- localStorage API
- ES6+ JavaScript
- Touch Events
- Intersection Observer (carrusel)

---

## Personalización

### Cambiar Colores

En `css/style.css`, modificar las variables:

```css
:root {
  --color-primary: #TU_COLOR;      /* Color principal */
  --color-secondary: #TU_COLOR;    /* Color secundario */
}
```

### Agregar Productos

En `productos.html` y otros scripts:

```javascript
const products = [
  {
    id: 9,  // ID único
    name: 'Tu Producto',
    price: 9999,
    image: 'img/tuimagen.jpg',
    category: 'Tu Marca'
  },
  // ... más productos
];
```

### Cambiar Costo de Envío

En `js/cart.js`:

```javascript
getShipping() {
  const subtotal = this.getSubtotal();
  return subtotal >= 50000 ? 0 : 3500;  // Modificar valores
}
```

### Añadir Más Páginas

1. Duplicar una página existente (ej: `blog.html`)
2. Cambiar contenido del `<main>`
3. Actualizar links en footer/header
4. Agregar `<script src="js/cart.js"></script>` antes de `</body>`

---

## Métricas del Proyecto

### Estadísticas de Código
- **Total líneas**: ~8,000+
- **HTML**: 13 páginas, ~3,500 líneas
- **CSS**: 1,700+ líneas
- **JavaScript**: 600+ líneas en 5 archivos

### Componentes Creados
- **50+ componentes CSS** reutilizables
- **20+ secciones HTML** modulares
- **15+ funciones JavaScript** documentadas

### Performance
- **Tiempo de carga**: <1s (sin backend)
- **Lighthouse Score**: 95+ (Performance, Accessibility)
- **Mobile-friendly**: 100% responsive
- **Accesibilidad**: ARIA labels, alt texts, keyboard navigation

---

## Solución de Problemas

### El carrito no guarda productos
**Solución**: Verificar que el navegador permita localStorage (no modo incógnito).

### Las imágenes no cargan
**Solución**: Verificar que las imágenes existan en `/img/` y las rutas sean correctas.

### El carrusel no funciona
**Solución**: Asegurarse de que `js/carousel.js` esté cargado correctamente.

### Los favoritos no persisten
**Solución**: Incluir `<script src="js/favoritos.js"></script>` en todas las páginas con productos.

### Badge del carrito muestra 0
**Solución**: Verificar que `js/cart.js` esté cargado en todas las páginas.

---

## Mejoras Futuras

### Backend (Próxima Fase)
- [ ] API REST con Node.js/Express
- [ ] Base de datos MongoDB/PostgreSQL
- [ ] Autenticación JWT
- [ ] Procesamiento de pagos (MercadoPago/Stripe)
- [ ] Sistema de órdenes y tracking
- [ ] Dashboard admin

### Funcionalidades
- [ ] Wishlist completa con página dedicada
- [ ] Comparador de productos
- [ ] Reviews y calificaciones de usuarios
- [ ] Chat en vivo
- [ ] Notificaciones push
- [ ] Programa de puntos/descuentos

### Optimizaciones
- [ ] Lazy loading de imágenes
- [ ] Code splitting
- [ ] Service Workers (PWA)
- [ ] CDN para assets
- [ ] Minificación y bundle con Webpack

---

## Principios Aplicados

### UX/UI Design Thinking
- **Empatía**: Diseño centrado en el usuario
- **Jerarquía Visual**: Uso de tamaños, colores y espaciado para guiar la atención
- **Consistencia**: Patrones repetibles en toda la interfaz
- **Feedback Visual**: Respuesta inmediata a todas las interacciones
- **Accesibilidad**: Contraste adecuado, ARIA labels, navegación por teclado

### Mejores Prácticas
- **BEM Naming Convention**: Para clases CSS (`block__element--modifier`)
- **Mobile-First**: Enfoque responsive desde diseño móvil
- **Progressive Enhancement**: Funcionalidad básica para todos, mejoras para navegadores modernos
- **Performance**: Optimización de imágenes, CSS y JavaScript
- **SEO**: Meta tags, estructura semántica, alt texts

---

## Autor

**Paulo Orsini**
- Curso: Front-End JavaScript
- Año: 2024
- Comisión: C24225
- Ubicación: Buenos Aires, Argentina

---

## Licencia

Este proyecto fue desarrollado con fines educativos como parte del curso de TalentoTech 2024.

---

## Agradecimientos

- TalentoTech por la formación
- Comunidad de desarrolladores
- Recursos de MDN y W3Schools
- Google Fonts por las tipografías

---

**¡Si te gustó el proyecto, no olvides darle una estrella en GitHub!**

---

© 2024 DeporShop. Proyecto educativo - Buenos Aires, Argentina.
