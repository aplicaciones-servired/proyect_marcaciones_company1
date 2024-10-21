export interface Marcacion {
  id: number
  nombres: string
  apellidos: string
  fecha_marcacion: string
  estado_marcacion: string
  nombre_dispositivo: string
  observacion: string
  observacionPersonal: string
  id_turno: number
  Pais: string
  Ciudad: string
  Direccion: string
  Latitud: string
  Longitud: string
  id_foto_temota: string
}

interface MarcacionSimple {
  id: number
  documento: string
  nombres: string
  apellidos: string
  fecha: string
  hora: string
  estado: string
}

export interface MarcacionResponse {
  marcaciones: MarcacionSimple[]
  count: number
}

export interface AuditMarcaciones {
  id: number
  nombres: string
  apellidos: string
  hora: string
  estado: string
  hora_inicio: string
}

export interface infoMarcacion {
  count: number
  totalPersona: number
  stados: {
    Entrada: number
    Entrada_intermedia: number
    Salida_intermedia: number
    Salida: number
  }
}
