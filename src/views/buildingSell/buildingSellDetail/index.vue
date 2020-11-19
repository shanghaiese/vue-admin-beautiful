<template>
  <div class="qyb-content">
    <a-table
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1500, y: 300 }"
    >
      <a slot="action">action</a>
    </a-table>
  </div>
</template>

<script>
  const columns = [
    {
      title: '楼层',
      width: 100,
      dataIndex: 'floor',
      key: 'floor',
      fixed: 'left',
    },
    {
      title: '三室一厅(左)',
      width: 100,
      dataIndex: 'threeRoom',
      key: 'age',
    },
    {
      title: '两室一厅(中)',
      width: 100,
      dataIndex: 'twoRoom',
      key: 'age',
    },
    {
      title: '四室一厅(右)',
      width: 100,
      dataIndex: 'FourRoom',
      key: 'age',
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      scopedSlots: { customRender: 'action' },
    },
  ]

  const data = [
    {
      floor: 1,
      key: 1,
      threeRoomDetail: {
        roomSituation: 'sold',
        roomArea: 98,
        roomBooknumber: 0,
        roomBooklimit: 3,
        roomId: 'B101',
        roomBuildingNumber: 'B',
      },
      twoRoomDetail: {
        roomSituation: 'sold',
        roomArea: 78,
        roomBooknumber: 0,
        roomBooklimit: 3,
        roomId: 'B101',
        roomBuildingNumber: 'B',
      },
      fourRoomDetail: {
        roomSituation: 'sold',
        roomArea: 128,
        roomBooknumber: 0,
        roomBooklimit: 3,
        roomId: 'B101',
        roomBuildingNumber: 'B',
      },
      area: 98,
      address: `London Park no`,
      bookNumber: 2,
      ifSold: true,
    },
    {
      floor: 2,
      key: 2,
      roomType: '三室一厅',
      area: 98,
      address: `London Park no`,
      bookNumber: 2,
      ifSold: true,
    },
    {
      floor: 3,
      key: 3,
      roomType: '三室一厅',
      area: 98,
      address: `London Park no`,
      bookNumber: 2,
      ifSold: true,
    },
    {
      floor: 4,
      key: 4,
      roomType: '三室一厅',
      area: 98,
      address: `London Park no`,
      bookNumber: 2,
      ifSold: true,
    },
  ]

  export default {
    name: 'BuildingSellDetail',
    components: {},
    directives: {},
    data() {
      return {
        data,
        columns,
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
      fetch() {},
    },
  }
</script>

<style scoped>
  .qyb-content {
    padding: 20px 15px;
  }
</style>
