<template>
    <div id="app">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <CazanaTest msg="Welcome to CazanaTest" :records="items"></CazanaTest>
                </b-col>
            </b-row>
            <br>
            <!--task one-->
            <b-row>
                <b-col cols="6">
                    <TaskOne :on-click="calAvgMileage" :records="items" :result="avgMileage"></TaskOne>
                </b-col>
            </b-row>
            <!--task two-->
            <b-row>
                <b-col cols="6">
                    <TaskTwo :on-click="estimateMileage" :records="items" :result="estMileage"></TaskTwo>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import CazanaTest from "@/components/CazanaTest";
    import TaskOne from "@/components/TaskOne";
    import TaskTwo from "@/components/TaskTwo";
    import moment from 'moment';

    // given data
    const history = [
        {
            event: 'MOT',
            date: '2018-3-10T00:00:00.000Z',
            data: {
                mileage: 69383,
                passed: true
            }
        },
        {
            event: 'MOT',
            date: '2017-3-10T00:00:00.000Z',
            data: {
                mileage: 58385,
                passed: true
            }
        },
        {
            event: 'MOT',
            date: '2016-4-10T00:00:00.000Z',
            data: {
                mileage: 46275,
                passed: true
            }
        },
        {
            event: 'MOT',
            date: '2016-4-10T00:00:00.000Z',
            data: {
                mileage: 46275,
                passed: false
            }
        },
        {
            event: 'MOT',
            date: '2015-4-10T00:00:00.000Z',
            data: {
                mileage: 37375,
                passed: true
            }
        },
        {
            event: 'MOT',
            date: '2014-4-10T00:00:00.000Z',
            data: {
                mileage: 28646,
                passed: true
            }
        }
    ];

    export default {
        name: 'app',

        data() {
            return {
                items: history,
                avgMileage: null,
                estMileage: null
            }
        },

        components: {
            CazanaTest,
            TaskOne,
            TaskTwo
        },
        methods: {
            // calculate average mileage
            calAvgMileage(arrRecord) {

                let arrMileage = [];

                arrRecord.forEach(function (d) {
                    if (d.data.passed === true && !isNaN(d.data.mileage) && d.data.mileage !== undefined){
                        arrMileage.push(d.data.mileage);
                    }
                });

                let arrSubMileage = [];

                const sortArray = arr => arr.sort((a, b) => b - a);

                const sortedMileage = sortArray(arrMileage);

                for (let i = 0; i < sortedMileage.length; i++) {
                    if(!isNaN(sortedMileage[i+1])){
                        arrSubMileage.push(sortedMileage[i] - sortedMileage[i + 1]);
                    }
                }

                const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

                let result = arrAvg(arrSubMileage);

                console.log(result);

                return this.avgMileage = result;
            },
            estimateMileage: function (arrRecord) {
                let arrMileage = [];
                let arrDate = [];


                arrRecord.forEach(function (d) {
                    if (d.data.passed === true && !isNaN(d.data.mileage) && d.data.mileage !== undefined) {
                        arrMileage.push(d.data.mileage);
                        let date = moment(d.date, 'YYYY-MM-DD').format('llll');
                        arrDate.push(new Date(date));
                    }
                });

                const sortArray = arr => arr.sort((a, b) => b - a);

                const sortedMileage = sortArray(arrMileage);

                const sortedDate = sortArray(arrDate);

                const today = new Date();

                const last_day = sortedDate[0];

                const period_year = today.getFullYear() - last_day.getFullYear();

                const period_month = today.getMonth() - last_day.getMonth();

                let arrSubMileage = [];

                for (let i = 0; i < sortedMileage.length; i++) {
                    if (!isNaN(sortedMileage[i + 1])) {
                        arrSubMileage.push(sortedMileage[i] - sortedMileage[i + 1]);
                    }
                }

                const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

                let avg_result = arrAvg(arrSubMileage);

               if(period_year <= 0){
                    return this.estMileage = sortedMileage[0]+(avg_result*(period_month/12));
               }else{
                   return this.estMileage = sortedMileage[0]+(avg_result*(period_year+(period_month/12)));
               }
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
