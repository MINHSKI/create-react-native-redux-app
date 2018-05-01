const Immutable = require('seamless-immutable');
const isImmutable = a => Immutable.isImmutable(a);

const { createTransform } = require('redux-persist');

const convertToPojo = state => state.asMutable({ deep: true });
// optionally convert this object into a JS object if it is Immutable
const fromImmutable = a => (isImmutable(a) ? convertToPojo(a) : a);
// convert this JS object into an Immutable object
const toImmutable = raw => Immutable(raw);

const seamlessImmutableTransformer = createTransform(
    // transform state coming from redux on its way to being serialized and stored
    state => fromImmutable(state),
    // transform state coming from storage, on its way to be rehydrated into redux
    state => toImmutable(state)
);

export {
    seamlessImmutableTransformer
}