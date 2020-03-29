class ProviderSerializer {
  static deSerialize(data) {
    return {
      id: data.id,
      email: data.email,
    };
  }
}

export { ProviderSerializer };
