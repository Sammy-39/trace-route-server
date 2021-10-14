const mqtt = require('mqtt')

const locations = require('./locations.json')

const publishLocations = () =>{

    const client = mqtt.connect('mqtt://broker.hivemq.com/mqtt')

    client.on('connect', ()=>{
        client.publish('test','Hello MQTT')
    })

    const publish = (topic,message) =>{
        if(client.connected){
            client.publish(topic,message)
        }
    }

    let index = 0

    const timer_ID = setInterval(()=>{
        publish('location_updates', JSON.stringify(locations.features[index++]))
        if(index===locations.features.length){
            publish('alert',JSON.stringify('end'))
            client.end()
        }
    },3000)

}

module.exports = publishLocations