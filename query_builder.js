module.query_builder={
    filter_patients: function(res,MongoClient,mongo_conn,filter_state){
        console.log('filter_patients called')
        
    },
    generate_autocomplete:function(MongoClient,mongo_conn,filter_state){
        console.log('autocomplete called')
    },
    generate_timeline:function(MongoClient,mongo_conn,filter_state){
        console.log('generate_timeline called')
    },
}
