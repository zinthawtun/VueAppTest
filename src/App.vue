<template>
    <div id="app">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <CazanaTest msg="Welcome to CazanaTest" :records="items"></CazanaTest>
                </b-col>
            </b-row>
            //task one
            <b-row>
                <b-col cols="12">
                    <TaskOne/>
                </b-col>
            </b-row>
            //task two
            <b-row>
                <b-col cols="12">
                    <TaskTwo/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import CazanaTest from "@/components/CazanaTest";
    import TaskOne from "@/components/TaskOne";
    import TaskTwo from "@/components/TaskTwo";

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
                items: history
            }
        },

        components: {
            CazanaTest,
            TaskOne,
            TaskTwo
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
