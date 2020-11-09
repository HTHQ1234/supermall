import Axios from 'axios';
import { request } from './request';

export function getCategoryText() {
  return request({
    url:'/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}