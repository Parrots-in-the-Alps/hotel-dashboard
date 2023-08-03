<template>
  <div>
    <a-row>
      <a-col :span="12">
        <Card title="Le pipi c'est délicieux">
          <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
        </Card>
      </a-col>
      <a-col :span="12">
        <Card title="Le pipi c'est délicieux en barre">
          <RadialBar :series="[71, 63, 77]"></RadialBar>
        </Card>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <Card title="chambre occupées">
          <Table type="occupied"></Table>
        </Card>
      </a-col>
      <a-col :span="12">
        <Card title="chambre disponibles">
          <Table type="free"></Table>
        </Card>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <Card title="Le pipi c'est délicieux en lignes">
          <Line :series="[{ data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }]"></Line>
        </Card>
      </a-col>
      <a-col :span="12">
        <Card title="Le pipi c'est délicieux en donut">
          <Donut :labels="['Apple', 'Mango', 'Banana', 'Papaya', 'Orange']" :series="[44, 55, 41, 17, 15]"></Donut>
        </Card>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <Card title="Le pipi c'est délicieux en area">
          <Area :labels="['8/3/2023, 11:54:20 AM', '8/4/2023, 11:54:20 AM', '8/5/2023, 11:54:20 AM', '8/6/2023, 11:54:20 AM', '8/7/2023, 11:54:20 AM']"
            :series="[{ data: [44, 55, 41, 17, 15] }]"></Area>
        </Card>
      </a-col>
      <!-- <a-col :span="12">
        <Card title="Le pipi c'est délicieux en donut">
          <Donut ></Donut>
        </Card>
      </a-col> -->
    </a-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'ZOUNGOU'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
    }
  },
}
</script>

<style scoped></style>
