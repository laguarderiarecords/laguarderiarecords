// ─────────────────────────────────────────────────────────────────────────────
// AGENDA DE LGR · edita esta lista para actualizar la página
// ─────────────────────────────────────────────────────────────────────────────
// Una línea por evento, en cualquier orden. Los eventos que ya pasaron se
// ocultan solos y el "Próximo show" se calcula con la fecha de hoy.
//
//   fecha    'AAAA-MM-DD'  (ej. '2026-12-05')
//   hora     texto libre   ('19:00', '15:00–23:00') o ''
//   evento   nombre del show
//   venue    'El Árbol', 'Museo de la Ciudad', etc.
//   tipo     'Producción LGR' · 'Coproducción' · 'Renta El Árbol' · 'Renta de audio' · 'Externo' · o ''
//   estado   'confirmado' · 'por confirmar' · 'gratis' · 'cancelado' · 'realizado'
//   boletos  link de Passline / Boletia, o ''
//
// Para editar desde el celular: abre este archivo en GitHub, toca el lápiz,
// cambia la línea y guarda ("Commit changes"). La página se actualiza en ~1 min.
// ─────────────────────────────────────────────────────────────────────────────

window.LGR_EVENTOS = [
  { fecha: '2026-11-20', hora: '',            evento: 'Mike Lamadrid',             venue: 'El Árbol', tipo: 'Externo',        estado: 'por confirmar', boletos: '' },
  { fecha: '2026-11-21', hora: '',            evento: 'Licenciado Cariño',         venue: 'El Árbol', tipo: 'Externo',        estado: 'por confirmar', boletos: '' },
  { fecha: '2026-11-22', hora: '',            evento: 'Addy Diamond',              venue: 'El Árbol', tipo: 'Externo',        estado: 'por confirmar', boletos: '' },
  { fecha: '2026-11-27', hora: '',            evento: 'Joshi + Friends',           venue: 'El Árbol', tipo: 'Renta El Árbol', estado: 'confirmado',    boletos: 'https://www.passline.com/eventos/joshi-friends-571854' },
  { fecha: '2026-11-28', hora: '19:00',       evento: 'Axel Catalán en Querétaro', venue: 'El Árbol', tipo: 'Coproducción',   estado: 'confirmado',    boletos: '' },
  { fecha: '2026-11-29', hora: '',            evento: 'Evento por confirmar',      venue: 'El Árbol', tipo: 'Externo',        estado: 'por confirmar', boletos: '' },
  { fecha: '2026-12-05', hora: '15:00–23:00', evento: 'Ataquemos en Querétaro',    venue: 'El Árbol', tipo: 'Producción LGR', estado: 'por confirmar', boletos: '' },
  { fecha: '2026-12-12', hora: '19:00',       evento: '¿Cómo nace un disco? (recaudación para el disco de Tóttem)', venue: 'El Árbol', tipo: '', estado: 'por confirmar', boletos: '' },
  { fecha: '2026-12-19', hora: '15:00–23:00', evento: 'David Velasco en Querétaro', venue: 'El Árbol', tipo: 'Producción LGR', estado: 'por confirmar', boletos: '' },
];

// ─────────────────────────────────────────────────────────────────────────────
// OPCIONAL · agenda en vivo desde Google Sheets
// ─────────────────────────────────────────────────────────────────────────────
// Si prefieren editar la agenda en una hoja de Google en vez de aquí:
//   1. Hoja de cálculo NATIVA de Google (no un .xlsx) con estas columnas en la
//      fila 1: fecha | hora | evento | venue | tipo | estado | boletos
//   2. Archivo → Compartir → Publicar en la web → elige SOLO esa pestaña →
//      formato "Valores separados por comas (.csv)" → Publicar.
//   3. Pega aquí el link que te da. Solo esa pestaña queda pública; el resto
//      del archivo (finanzas, fees) sigue privado.
// Si el link falla, la página usa la lista de arriba y lo avisa.
window.LGR_SHEET_CSV = '';
