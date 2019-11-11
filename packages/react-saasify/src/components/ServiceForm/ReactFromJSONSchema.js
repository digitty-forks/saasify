import React from 'react'

import ReactFromJSON from 'react-from-json'

const mapProp = (prop, onChange) => {
  if (prop && prop !== onChange && prop.type) {
    const { type, ...props } = prop

    return {
      type,
      props: {
        ...props,
        onChange,
        name: props.propKey
      }
    }
  }

  return prop
}

export const ReactFromJSONSchema = ({ definition, mapping, onChange }) => (
  <ReactFromJSON
    entry={{ ...definition.params.schema.properties, type: 'entry' }}
    mapping={mapping}
    mapProp={(prop) => mapProp(prop, onChange)}
  />
)