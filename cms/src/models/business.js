class Business {
  constructor(params) {

    this.name = params.name;
    this.phones = params.phones;
    this.emails = params.emails;
    this.type = params.type;
    this.description = params.description;
    this.verified = params.verified;
    this.instagram = params.instagram;
    this.facebook = params.facebook;
    this.address = params.address;
    this.deliveryRange = params.delivery_range;
    this.deliveryZone = params.delivery_zone;
    this.tags = params.tags;
    this.time = params.available_hours;

  }
}

export {Business};