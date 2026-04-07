namespace opensciedBase {
    //% fixedInstances
    export class OpensciedServoClient extends modules.ServoClient {
        constructor(role: string) {
            super(role)
        }

        // block created in ose-servo-positional
        getAngle(): number {
            return super.angle()
        }

        // block created in ose-servo-positional
        setAngle(angle: number): void {
            if (!this.enabled()) {
                this.setEnabledOpenscied(true)
            }
            super.setAngle(angle)
        }

        // block created in ose-servo-positional
        setAngleAndWait(angle: number): void {
            super.setAngle(angle)
            pause(1000)
        }

        // block created in ose-servo-continuous
        getSpeed(): number {
            return Math.map(
                this.angle(),
                this.minAngle(),
                this.maxAngle(),
                -100,
                100,
            )
        }

        // block created in ose-servo-continuous
        setSpeed(speed: number): void {
            this.setAngle(
                Math.map(speed, -100, 100, this.minAngle(), this.maxAngle()),
            )
        }

        // can't override this method or it will be called during ServoClient.setAngle()
        setEnabledOpenscied(state: boolean): void {
            super.setEnabled(state)
            pause(1000) // need to allow time for the servo to actually enable
        }
    }

    //% fixedInstance whenUsed
    export const leftServo = new OpensciedServoClient("leftServo?srvo=0")
    //% fixedInstance whenUsed
    export const middleServo = new OpensciedServoClient("middleServo?srvo=1")
    //% fixedInstance whenUsed
    export const rightServo = new OpensciedServoClient("rightServo?srvo=2")
}
