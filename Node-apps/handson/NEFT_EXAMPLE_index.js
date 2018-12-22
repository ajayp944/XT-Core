const NEFTTransferService =  require('./services/NEFTTransferService');

const service = new NEFTTransferService();

service.transfer(100,1,2);