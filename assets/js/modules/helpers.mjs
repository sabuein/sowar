// Just some functions to make life lazier!

const id = (id) => document.getElementById(id);

const cl = (output) => console.log(output);

export {
    id,
    cl as log
}