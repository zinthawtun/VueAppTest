<template>
    <div>
        <h1>{{ msg }}</h1>
        <table style="width:100%">
            <tr>
                <th>Event</th>
                <th>Date</th>
                <th>Mileage</th>
                <th>Test</th>
            </tr>

            <tr v-for="record in records">
                <td>{{record.event}}</td>
                <td>{{record.date | formatDate}}</td>
                <td>{{record.data.mileage}}</td>
                <td v-if="record.data.passed === true" class="success">Pass</td>
                <td v-if="record.data.passed === false" class="fail">Fail</td>
            </tr>

        </table>
    </div>
</template>

<script>
    export default {
        name: 'CazanaTest',
        props: {
            msg: String,
            records: Array,
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .success {
        background: lightgreen;
    }

    .fail {
        background: orangered;
    }
</style>
