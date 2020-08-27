import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var css_248z = "/* 主题色 */\n/* 文字色 */\n/* 文字大小 */\n/* 圆角 */\n/* 图标大小 */\n/* 水平间距 */\n/* 垂直间距 */\n.zec-switch {\n  height: 48px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px;\n  border-bottom: 1px solid #ddd;\n}\n.zec-switch .zec-name {\n  width: 50%;\n}\n.zec-switch .zec-conetnt {\n  width: 40%;\n}\n.zec-switch .switch {\n  position: relative;\n  width: 51px;\n  height: 31px;\n  z-index: 0;\n  -webkit-appearance: none;\n  border-radius: 31px;\n  background: #e5e5e5;\n  margin: 0px;\n  padding: 0px;\n  border-width: 0px;\n  border-style: initial;\n  border-color: initial;\n  border-image: initial;\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n}\n.zec-switch .switch::after,\n.zec-switch .switch::before {\n  content: '';\n  position: absolute;\n  left: 1.5px;\n  top: 1.5px;\n  height: 28px;\n  border-radius: 28px;\n  background: #ffffff;\n  transition: all 0.2s ease 0s;\n}\n.zec-switch .switch::before {\n  width: 48px;\n  box-sizing: border-box;\n  z-index: 1;\n  transform: scale(1);\n}\n.zec-switch .switch::after {\n  width: 28px;\n  z-index: 2;\n  transform: translateX(0px);\n  box-shadow: rgba(0, 0, 0, 0.21) 2px 2px 4px;\n}\n.zec-switch .switch-active {\n  background: #4dd865;\n}\n.zec-switch .switch-active::before {\n  transform: scale(0);\n}\n.zec-switch .switch-active::after {\n  transform: translateX(20px);\n}\n.zec-switch .switch-disbled {\n  opacity: 0.3;\n}\n";
styleInject(css_248z);