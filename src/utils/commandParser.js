    export function parseCommand(input) {
    const commandRegex = /^\/(\w+)\s*(.*)$/;
    const match = input.trim().match(commandRegex);

    if (!match) return null;

    const [, command, args] = match;
    return {
        command: command.toLowerCase(),
        args: args.trim(),
    };
    }
