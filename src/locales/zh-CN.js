import analysis from './zh-CN/analysis';
import exception from './zh-CN/exception';
import form from './zh-CN/form';
import globalHeader from './zh-CN/globalHeader';
import login from './zh-CN/login';
import menu from './zh-CN/menu';
import monitor from './zh-CN/monitor';
import result from './zh-CN/result';
import settingDrawer from './zh-CN/settingDrawer';
import settings from './zh-CN/settings';
import pwa from './zh-CN/pwa';
import component from './zh-CN/component';
import submission from './zh-CN/submission';

export default {
  'navBar.lang': '语言',
  'layout.user.link.fe': '前端仓库',
  'layout.user.link.be': '后端仓库',
  'layout.user.link.github': 'Github',
  'app.home.title': 'Panda 在线测评系统',
  'app.home.introduce': '介绍',
  'app.description': '深呼吸，然后继续前行。',
  'app.forms.basic.title': '基础表单',
  'app.forms.basic.description':
    '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
  ...analysis,
  ...exception,
  ...form,
  ...globalHeader,
  ...login,
  ...menu,
  ...monitor,
  ...result,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...submission,
};
