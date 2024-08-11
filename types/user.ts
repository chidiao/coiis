export interface RegisterParams {
  email?: string
  password?: string
  verification_code?: string
  pkey?: string
}

export interface RegisterData {
  id?: string
  email?: string
  email_active?: boolean
  user_type?: number
  data_state?: boolean
  gmt_create?: number
  gmt_modified?: number
  status?: number
  token?: string
  message_state?: boolean
}

export interface LoginParams {
  email?: string
  password?: string
}

export interface LoginData {
  id?: string
  nickname?: string
  email?: string
  email_active?: boolean
  user_type?: number
  phone_number?: string
  data_state?: boolean
  gmt_create?: number
  gmt_modified?: number
  status?: number
  tenant_code?: string
  token?: string
  message_state?: boolean
}
