// Command Interface
interface Command {
  execute(): void
}

// Concrete Commands
class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOn()
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOff()
  }
}

// Receiver
class Light {
  turnOn() {
    console.log('Light is ON')
  }

  turnOff() {
    console.log('Light is OFF')
  }
}

// Invoker
class RemoteControl {
  private command: Command | null = null

  setCommand(command: Command) {
    this.command = command
  }

  pressButton() {
    if (this.command) {
      this.command.execute()
    }
  }
}

// Client
const light = new Light()
const remote = new RemoteControl()

const lightOn = new LightOnCommand(light)
const lightOff = new LightOffCommand(light)

remote.setCommand(lightOn) // Set the command
remote.pressButton() // Execute the command - Light is ON

remote.setCommand(lightOff) // Set a different command
remote.pressButton() // Execute the command - Light is OFF
