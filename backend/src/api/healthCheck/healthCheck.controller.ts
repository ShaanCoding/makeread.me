export default class HealthCheckController {
    public async getHealth(): Promise<string> {
        return 'Service is up and running!'
    }
}
