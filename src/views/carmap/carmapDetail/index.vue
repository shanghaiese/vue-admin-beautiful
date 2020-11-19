<template>
  <div class="qyb-content">
    <div>
      <a-button type="primary" @click="showDrawer()">新增车位预定</a-button>
    </div>
    <div>
      <v-chart :options="polar" />
      <!--      <div id="chart_example"></div>-->
    </div>
    <div class="qyb-drawer">
      <a-drawer
        title="车位信息"
        :width="600"
        :visible="visible"
        :body-style="{ paddingBottom: '80px' }"
        @close="onClose"
      >
        <a-form :form="form" layout="vertical" hide-required-mark>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Name">
                <a-input
                  v-decorator="[
                    'name',
                    {
                      rules: [
                        { required: true, message: 'Please enter user name' },
                      ],
                    },
                  ]"
                  placeholder="Please enter user name"
                />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Url">
                <a-input
                  v-decorator="[
                    'url',
                    {
                      rules: [{ required: true, message: 'please enter url' }],
                    },
                  ]"
                  style="width: 100%"
                  addon-before="http://"
                  addon-after=".com"
                  placeholder="please enter url"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Owner">
                <a-select
                  v-decorator="[
                    'owner',
                    {
                      rules: [
                        { required: true, message: 'Please select an owner' },
                      ],
                    },
                  ]"
                  placeholder="Please a-s an owner"
                >
                  <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
                  <a-select-option value="mao">Maomao Zhou</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Type">
                <a-select
                  v-decorator="[
                    'type',
                    {
                      rules: [
                        { required: true, message: 'Please choose the type' },
                      ],
                    },
                  ]"
                  placeholder="Please choose the type"
                >
                  <a-select-option value="private">Private</a-select-option>
                  <a-select-option value="public">Public</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="Approver">
                <a-select
                  v-decorator="[
                    'approver',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please choose the approver',
                        },
                      ],
                    },
                  ]"
                  placeholder="Please choose the approver"
                >
                  <a-select-option value="jack">Jack Ma</a-select-option>
                  <a-select-option value="tom">Tom Liu</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="DateTime">
                <a-date-picker
                  v-decorator="[
                    'dateTime',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please choose the dateTime',
                        },
                      ],
                    },
                  ]"
                  style="width: 100%"
                  :get-popup-container="(trigger) => trigger.parentNode"
                />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="24">
              <a-form-item label="Description">
                <a-textarea
                  v-decorator="[
                    'description',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter url description',
                        },
                      ],
                    },
                  ]"
                  :rows="4"
                  placeholder="please enter url description"
                />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <div
          :style="{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right',
            zIndex: 1,
          }"
        >
          <a-button :style="{ marginRight: '8px' }" @click="onClose">
            Cancel
          </a-button>
          <a-button type="primary" @click="onClose">Submit</a-button>
        </div>
      </a-drawer>
    </div>
  </div>
</template>

<script>
  import ECharts from 'vue-echarts'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/polar'

  export default {
    name: 'CarmapDetail',
    components: {
      'v-chart': ECharts,
    },
    directives: {},
    data() {
      return {
        data: [],
        query: {},
        polar: {
          graphic: [
            {
              type: 'group',
              id: 'textGroup1',
              left: 145,
              top: 185,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#01',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
              onclick: () => this.setCarData(145),
              rotation: -100,
            },
            {
              type: 'group',
              id: 'textGroup2',
              left: 192,
              top: 158,
              bounding: 'raw',
              onclick: () => this.setCarData(146),
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    text: '#02',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
              rotation: -100,
            },
            {
              type: 'group',
              id: 'textGroup3',
              left: 240,
              top: 130,
              bounding: 'raw',
              onclick: () => this.setCarData(147),
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#03',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
              rotation: -100,
            },
            {
              type: 'group',
              id: 'textGroup4',
              left: 295,
              top: 250,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#04',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
              rotation: 0,
            },
            {
              type: 'group',
              id: 'textGroup5',
              left: 350,
              top: 250,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#05',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
            },
            {
              type: 'group',
              id: 'textGroup6',
              left: 405,
              top: 250,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#06',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
            },
            {
              type: 'group',
              id: 'textGroup7',
              left: 460,
              top: 250,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#07',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
            },
            {
              type: 'group',
              id: 'textGroup8',
              left: 515,
              top: 250,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#08',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
            },
            {
              type: 'group',
              id: 'textGroup9',
              left: 570,
              top: 250,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#09',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
            },
            {
              type: 'group',
              id: 'textGroup10',
              left: 625,
              top: 250,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#10',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
            },
            {
              type: 'group',
              id: 'textGroup11',
              left: 680,
              top: 250,
              bounding: 'raw',
              children: [
                {
                  type: 'rect',
                  z: 100,
                  left: 'center',
                  top: 'center',
                  shape: {
                    width: 50,
                    height: 80,
                  },
                  style: {
                    fill: '#fff',
                    stroke: '#00AEEF',
                    lineWidth: 3,
                    shadowBlur: 8,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                    shadowColor: '#00AEEF',
                    lineDash: [10],
                  },
                },
                {
                  type: 'text',
                  z: 100,
                  top: 'middle',
                  left: 'center',
                  style: {
                    cursor: 'pointer',
                    lineDash: '4',
                    strokeDasharray: '4',
                    text: '#11',
                    font: '20px "STHeiti", sans-serif',
                    color: '#00AEEF',
                  },
                },
              ],
            },
          ],
        },
        portName: '',
        portCode: '',
        portStatus: '',
        portBookingTime: '',
        visible: false,
      }
    },
    mounted() {
      this.fetch()
    },
    created() {},
    beforeDestroy() {},
    methods: {
      fetch() {
        // this.setChart()
      },
      setCarData(data) {
        console.log(data)
        this.visible = true
      },
      showDrawer() {
        this.visible = true
      },
      onClose() {
        this.visible = false
      },
    },
  }
</script>

<style scoped>
  .echarts {
    width: 100%;
  }

  .qyb-content {
    padding: 20px 15px;
  }

  .qyb-drawer {
  }
</style>
