function isNotNullOrUndefined<T extends Object>(input: null | undefined | T): input is T {
    return input != null;
}
