class ProviderSerializer {
  static deSerialize(data) {
    return {
      email: data.email,
    };
  }
}

export { ProviderSerializer };
