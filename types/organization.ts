export interface OrganizationList {
  count?: number
  results?: Organization[]
  next?: string
  previous?: string
}

export interface Organization {
  id?: number
  organization_code?: string
  organization_name?: string
  organization_description?: string
  organization_logo?: string
  organization_banner?: string
  gmt_create?: number
  gmt_modified?: number
  status?: number
  data_state?: boolean
  tenant_code?: string
}

export interface OrganizationDetail {
  id?: number
  organization_code?: string
  organization_name?: string
  organization_description?: string
  organization_logo?: string
  organization_banner?: string
  gmt_create?: number
  gmt_modified?: number
  status?: number
  data_state?: boolean
  tenant_code?: string
  organization_users?: OrganizationUser[]
}

export interface OrganizationUser {
  id?: number
  organization_id?: number
  user_id?: number
  nickname?: string
  email?: string
  user_type?: number
  gmt_create?: number
  gmt_modified?: number
  status?: number
  data_state?: boolean
  tenant_code?: string
}
