/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2019 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

export default {
    name: 'el-checkbox-group',
    type: 'el-checkbox-group',
    displayName: '多选框',
    icon: 'bk-drag-checkbox',
    group: '表单',
    order: 1,
    styles: ['margin'],
    events: [{ name: 'change' }],
    directives: [
        {
            type: 'v-model',
            prop: 'value',
            propTypes: ['array'],
            val: '',
            valType: 'variable'
        }
    ],
    props: {
        value: {
            type: 'array',
            val: [1, 2]
        }
    },
    slots: {
        default: {
            name: ['el-checkbox'],
            type: ['list', 'remote'],
            displayName: 'el-checkbox可选项配置',
            tips: '默认插槽，填写的数据需要是数组且每个元素需包含label和value字段',
            remoteValidate (data) {
                if (!Array.isArray(data)) return '返回值需要是数组'
                const errData = data.find((item) => (!item.hasOwnProperty('label') || !item.hasOwnProperty('value')))
                if (errData) return '返回值每个元素需要含有label和value字段'
            },
            val: [
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2 },
                { label: '选项三', value: 3 }
            ],
            payload: {}
        }
    }
}