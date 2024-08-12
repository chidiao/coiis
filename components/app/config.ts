import {
  HomeOutlined,
  StarOutlined,
  CheckSquareOutlined,
  DribbbleOutlined,
  SearchOutlined
} from '@ant-design/icons-vue'

export const menu = [
  {
    route: '/app',
    label: 'Home',
    icon: HomeOutlined
  },
  {
    route: '/app/workspace',
    label: 'Workspace',
    icon: StarOutlined
  },
  {
    route: '/app/collections',
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
