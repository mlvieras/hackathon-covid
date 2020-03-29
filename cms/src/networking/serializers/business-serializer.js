class BusinessSerializer {
  static deSerialize(data) {
    return {
      name: data.name,
      phones: data.phones,
      emails: data.emails,
      type: data.type,
      description: data.description,
      verified: data.verified,
      instagram: data.instagram,
      facebook: data.facebook,
      address: data.address,
      deliveryRange: data.delivery_range,
      deliveryZone: data.delivery_zone,
      tags: data.tags,
      time: data.available_hours
    };
  }
}

export { BusinessSerializer };
