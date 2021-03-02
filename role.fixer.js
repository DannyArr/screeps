var roleFixer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.fixing && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.fixing = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.fixing && creep.store.getFreeCapacity() == 0) {
            creep.memory.fixing = true;
            creep.say('🚧 fix');
        }

        if(creep.memory.fixing) {
            var targets = creep.room.find(FIND_RUINS);
            if(targets.length) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleFixer;