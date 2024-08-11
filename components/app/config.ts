import {
  HomeOutlined,
  StarOutlined,
  CheckSquareOutlined,
  DribbbleOutlined,
  SearchOutlined
} from '@ant-design/icons-vue'

export const menu = [
  {
    route: '/',
    label: 'Home',
    icon: HomeOutlined
  },
  {
    route: '/workspace',
    label: 'Workspace',
    icon: StarOutlined
  },
  {
    route: '/collections',
    label: 'Collections',
    icon: CheckSquareOutlined
  },
  {
    route: '/app/category',
    label: 'Categories',
    icon: DribbbleOutlined
  },
  {
    route: '/search',
    label: 'Search',
    icon: SearchOutlined
  }
]
