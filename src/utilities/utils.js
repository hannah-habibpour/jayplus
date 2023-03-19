export const calculatePrice = (vehicleType, serviceType) => {
    if (vehicleType === "Sedan" && serviceType === "Show Room") {
        return "140"
    } else if (vehicleType === "SUV" && serviceType === "Show Room") {
        return "160"
    } else if (vehicleType === "Large SUV / Truck" && serviceType === "Show Room") {
        return "170"
    } else if (vehicleType === "Motorcycle" && serviceType === "Show Room") {
        return "100"
    } else if (vehicleType === "Sedan" && serviceType === "Basic") {
        return "240"
    } else if (vehicleType === "SUV" && serviceType === "Basic") {
        return "260"
    } else if (vehicleType === "Large SUV / Truck" && serviceType === "Basic") {
        return "270"
    } else if (vehicleType === "Motorcycle" && serviceType === "Basic") {
        return "200"
    } else if (vehicleType === "Sedan" && serviceType === "Interior") {
        return "340"
    } else if (vehicleType === "SUV" && serviceType === "Interior") {
        return "360"
    } else if (vehicleType === "Large SUV / Truck" && serviceType === "Interior") {
        return "370"
    } else if (vehicleType === "Motorcycle" && serviceType === "Interior") {
        return "300"
    } else if (vehicleType === "Sedan" && serviceType === "Exterior") {
        return "440"
    } else if (vehicleType === "SUV" && serviceType === "Exterior") {
        return "460"
    } else if (vehicleType === "Large SUV / Truck" && serviceType === "Exterior") {
        return "470"
    } else if (vehicleType === "Motorcycle" && serviceType === "Exterior") {
        return "400"
    } else {
        return 0
    }
}
