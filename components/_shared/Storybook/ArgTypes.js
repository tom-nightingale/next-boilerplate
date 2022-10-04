export default function defineArgs(control, description, summary) {
    let args = {
        control: control,
        description: description,
        table: {
            type: { summary: summary },
        },
    };
    return args;
}