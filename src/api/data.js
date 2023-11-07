import { get, post, put, del } from "./api.js";

export async function getAll() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id) {
    return get('/data/albums/' + id);
}

export async function deleteById(id) {
    return del('/data/albums/' + id);
}