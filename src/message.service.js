import app from './app.module';

app.service('MessageService', function($interval) {
    this.setMessage = ({ msg, msgType }) => {
        (this.message = msg), (this.messageType = msgType);
        $interval(
            () => {
                this.message = null;
                this.messageType = null;
            },
            2000,
            1
        );
    };
});
