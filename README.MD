Este proyecto pertenece al curso de FRONT-END JS, Año 2024, Comisión C24225, Alumno Paulo Orsini.

# DeporShop - E-commerce de Zapatillas Deportivas

## 📋 Descripción del Proyecto

DeporShop es un sitio web de e-commerce especializado en la venta de zapatillas deportivas de las principales marcas del mercado. El proyecto fue desarrollado con un enfoque en UX/UI siguiendo los principios de Design Thinking, ofreciendo una experiencia de usuario moderna, intuitiva y completamente responsive.

## 🎯 Funcionalidades Principales

### 1. **Página de Inicio (Index.html)**
- **Hero Section**: Presenta la propuesta de valor de la tienda
- **Carrusel Interactivo**: Muestra 8 productos destacados con:
  - Navegación por flechas
  - Indicadores de posición
  - Auto-play automático con pausa al hover
  - Soporte táctil para dispositivos móviles
  - Navegación por teclado (flechas izquierda/derecha)
- **Sección de Beneficios**: Grid con 4 cards destacando envío gratis, pagos seguros, devoluciones y calidad garantizada
- **Header Sticky**: Navegación fija con logo, menú y acciones (búsqueda, usuario, carrito)
- **Footer Completo**: Con información de la tienda, enlaces, ayuda y newsletter

### 2. **Catálogo de Productos (productos.html)**
- **Sistema de Filtros Avanzado**:
  - Búsqueda por nombre
  - Filtro por categoría (Running, Training, Casual, Basketball)
  - Filtro por marca (Nike, Adidas, Puma, New Balance, Reebok)
  - Ordenamiento (Más recientes, Menor precio, Mayor precio, Más vendidos)
- **Grid de Productos**: 8 productos con cards que incluyen:
  - Imagen del producto
  - Badge de estado (Nuevo, Oferta, Popular, Premium)
  - Nombre y categoría
  - Descripción breve
  - Precio actual y anterior (si aplica)
  - Rating con estrellas
  - Botones de acción (Ver Detalles, Agregar al Carrito)
- **Paginación**: Navegación entre páginas de productos
- **Hover Effects**: Animaciones suaves al pasar el mouse

### 3. **Página de Contacto (contacto.html)**
- **Formulario de Contacto Funcional**:
  - Campos: Nombre, Email, Teléfono, Asunto (select), Mensaje
  - Validación en tiempo real con JavaScript
  - Validación de formato de email con regex
  - Validación de teléfono con regex
  - Checkbox de aceptación de términos
  - Mensaje de éxito animado tras envío
- **Tarjetas de Información**:
  - Dirección física (Av. Corrientes 1234, CABA)
  - Teléfono de contacto (+54 11 1234-5678)
  - Email (info@deporshop.com)
  - Horario de atención
- **Mapa de Google Maps**: Ubicación interactiva de la tienda
- **Sección de Redes Sociales**: Enlaces a Facebook, Instagram y Twitter
- **FAQ Accordion**: 4 preguntas frecuentes con respuestas expandibles

## 🎨 Características de Diseño

### Design System Profesional
- **Variables CSS**: 50+ custom properties para colores, espaciado, tipografía, sombras y radios
- **Sistema de Espaciado**: Basado en múltiplos de 8px para consistencia
- **Paleta de Colores**:
  - Primary: `#FF6B35` (Naranja vibrante)
  - Secondary: `#F7931E` (Naranja cálido)
  - Accent: `#F7931E`
  - Grises: Desde `#1A1A1A` hasta `#F5F5F5`
- **Tipografía**:
  - Font Principal: Inter (300-700)
  - Font Display: Caveat (400-700)
  - Escala tipográfica de 12px a 72px

### Responsive Design
- **Mobile-First**: Diseñado primero para móviles
- **Breakpoints**:
  - Mobile: < 576px
  - Tablet: 768px
  - Desktop: 992px, 1200px, 1400px
- **Auto-Layout**: CSS Grid con `auto-fit minmax()` para adaptación automática
- **Touch-Friendly**: Botones y áreas clicables optimizadas para touch (mínimo 44x44px)

### Animaciones y Transiciones
- **Smooth Transitions**: Todas las interacciones con transiciones suaves
- **Hover Effects**: Transformaciones y elevaciones en cards
- **Keyframe Animations**: Fadeins, slides y rotaciones
- **GPU Accelerated**: Uso de `transform` y `opacity` para rendimiento óptimo

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica con ARIA labels para accesibilidad
- **CSS3**: 
  - Custom Properties (Variables CSS)
  - Flexbox y CSS Grid
  - Gradientes, sombras y filtros
  - Media Queries responsive
  - Animaciones y transiciones
- **JavaScript (ES6+)**:
  - `carousel.js`: Lógica del carrusel con eventos táctiles y teclado
  - `contact.js`: Validación de formulario con regex y notificaciones
  - `carrito.js`: (En desarrollo para backend)
  - Módulos, arrow functions, destructuring

### Recursos Externos
- **Google Fonts**: Inter y Caveat
- **SVG Icons**: Iconos vectoriales inline para mejor rendimiento
- **Google Maps Embed API**: Mapa de ubicación

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ iOS Safari
- ✅ Chrome Android
- ✅ Responsive desde 320px hasta 1920px+

## 🚀 Próximas Funcionalidades (Backend en desarrollo)

- Integración con base de datos para productos dinámicos
- Sistema de carrito de compras funcional
- Autenticación de usuarios
- Proceso de checkout completo
- Panel de administración
- API RESTful para gestión de productos

## 📂 Estructura del Proyecto

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

## 🎓 Principios Aplicados

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

## 👨‍💻 Autor

**Paulo Orsini**  
Comisión C24225 - TalentoTech  
Curso: Front-End JavaScript 2024

---

© 2024 DeporShop. Proyecto educativo - Buenos Aires, Argentina.