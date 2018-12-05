<template>
    <div align="left">
    <b-row>
        <b-col>
            <b-button type="button" @click='onClick(records)' variant="primary">Calculate Average</b-button>
        </b-col>
    </b-row>
    <br>
    <b-row>
        <b-col>
            <p>The average mileage per year: {{result}} </p>
        </b-col>
    </b-row>
    </div>
</template>

<script>
    export default {
        name: "TaskOne",
        props: {
            onClick: Function,
            records: Array,
            result: Number
        }
    }
</script>

<style scoped>

</style>