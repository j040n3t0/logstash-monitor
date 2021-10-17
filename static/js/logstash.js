//const txt = '{"host":"a0bc4d010f28","version":"7.14.1","http_address":"0.0.0.0:9600","id":"5e6a450c-0b38-4101-91ee-7e2df873dbb4","name":"a0bc4d010f28","ephemeral_id":"88186fbc-859b-41c0-b51c-9d4acd022618","status":"green","snapshot":false,"pipeline":{"workers":6,"batch_size":125,"batch_delay":50},"pipelines":{"main":{"events":{"in":77000,"duration_in_millis":132,"filtered":77000,"queue_push_duration_in_millis":151,"out":77000},"plugins":{"inputs":[{"id":"1917db4df755da79150caf46fc18843cf642d1303c9842387a757ff88f23d0c4","name":"elasticsearch","events":{"queue_push_duration_in_millis":151,"out":77000}}],"codecs":[{"id":"plain_1087264a-b820-4228-a5ed-422e52d7660f","name":"plain","encode":{"writes_in":0,"duration_in_millis":0},"decode":{"writes_in":0,"duration_in_millis":0,"out":0}}],"filters":[],"outputs":[{"id":"logstash_mpdft","name":"sink","events":{"in":77000,"duration_in_millis":32,"out":77000}}]},"reloads":{"successes":0,"last_success_timestamp":null,"failures":0,"last_failure_timestamp":null,"last_error":null},"queue":{"type":"memory","events_count":0,"queue_size_in_bytes":0,"max_queue_size_in_bytes":0},"hash":"59b9d1e98016fdb82ca65961a69ec7a8f98ca0941aa3d4f789280a330fba8f97","ephemeral_id":"2925a200-793a-42e5-91f9-03724f554559"}}}'

const obj = JSON.parse(txt);
const logstash_return = Object.values(obj);

for (pipeline_name in logstash_return[9]) {
    var nome_pipeline = pipeline_name;
    //var total_input_in = logstash_return[9][pipeline_name]['plugins']['inputs'][0]['events']['out'];
    var total_input_out = logstash_return[9][pipeline_name]['plugins']['inputs'][0]['events']['out'];
    //var total_filter_in = logstash_return[9][pipeline_name]['plugins']['inputs'][0]['events']['out'];
    //var total_filter_out = logstash_return[9][pipeline_name]['plugins']['inputs'][0]['events']['out'];
    var total_output_in = logstash_return[9][pipeline_name]['plugins']['inputs'][0]['events']['out'];
    var total_output_out = logstash_return[9][pipeline_name]['plugins']['inputs'][0]['events']['out'];

    var string_join = "<h1>Pipeline: "+nome_pipeline
    string_join = string_join + " | Input In: "+total_input_out;
    string_join = string_join + " | Output In: "+total_output_in;
    string_join = string_join + " | Output Out: "+total_output_out;
    string_join = string_join + "</h1>";

    document.getElementById("demo").innerHTML = string_join;

}

//const pipelines = Object.values(logstash_return[9]);
//console.log(pipelines);
//console.log(Object.keys(pipelines));

/// 1. O NOME DAS PIPELINES SÃO CHAVES: EX: MAIN
/////// ISSO DENTRO DA CHAVE "PIPELINES"