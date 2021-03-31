pragma solidity ^0.6.0;

import "./Interfaces/IWrappedToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Controller is Ownable {
    /// @notice The address of the router contract
    address public routerAddress;

    /// @notice An event emitted once the router address is changed
    event RouterAddressSet(address newRouterAddress);

    /// @notice Allows only router contract for msg.sender
    modifier onlyRouterContract() {
        require(
            msg.sender == routerAddress,
            "Controller: Not called by the router contract"
        );
        _;
    }

    /**
     * @notice Forwards Mint() for the given `wrappedToken` with `amount` and `receiver`
     * @param wrappedToken The address of the token contract
     * @param receiver The address to which the tokens will be minted
     * @param amountToMint The amount to be minted
     */
    function mint(
        address wrappedToken,
        address receiver,
        uint256 amountToMint
    ) public onlyRouterContract {
        IWrappedToken(wrappedToken).mint(receiver, amountToMint);
    }

    /**
     * @notice Forwards Burn() for the given `wrappedToken` with `amount` and `receiver`
     * @param wrappedToken The address of the token contract
     * @param account The address from which the tokens will be burned
     * @param amount The amount to be burned
     */
    function burnFrom(
        address wrappedToken,
        address account,
        uint256 amount
    ) public onlyRouterContract {
        IWrappedToken(wrappedToken).burnFrom(account, amount);
    }

    /**
     * @notice Changes the router address
     * @param _routerAddress The new router address
     */
    function setRouterAddress(address _routerAddress) public onlyOwner {
        require(
            _routerAddress != address(0),
            "WrappedToken: router address cannot be zero"
        );
        routerAddress = _routerAddress;
        emit RouterAddressSet(routerAddress);
    }
}
