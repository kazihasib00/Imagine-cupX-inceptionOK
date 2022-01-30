/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
    Avatar,
    Box,
    Button,
    Card,
    Checkbox,
    Divider,
    IconButton,
    InputAdornment,
    Link,
    SvgIcon,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Tabs,
    TextField,
    Typography,
    makeStyles
} from '@material-ui/core';
import {
    Edit as EditIcon,
    ArrowRight as ArrowRightIcon,
    Search as SearchIcon
} from 'react-feather';
// import getInitials from 'src/utils/getInitials';
// import getFullName from 'src/utils/getFullName';


const sortOptions = [
    {
        value: 'updatedAt|desc',
        label: 'Last update (newest first)'
    },
    {
        value: 'updatedAt|asc',
        label: 'Last update (oldest first)'
    },
    {
        value: 'orders|desc',
        label: 'Total orders (high to low)'
    },
    {
        value: 'orders|asc',
        label: 'Total orders (low to high)'
    }
];

function applyFilters(agents, query, filters) {
    return agents.filter((agent) => {
        let matches = true;

        if (query) {
            const properties = ['phoneNumber', 'name'];
            let containsQuery = false;

            properties.forEach((property) => {
                if (agent[property].toLowerCase().includes(query.toLowerCase())) {
                    containsQuery = true;
                }
            });

            if (!containsQuery) {
                matches = false;
            }
        }

        Object.keys(filters).forEach((key) => {
            const value = filters[key];

            if (value && agent[key] !== value) {
                matches = false;
            }
        });

        return matches;
    });
}

function applyPagination(agents, page, limit) {
    return agents.slice(page * limit, page * limit + limit);
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }

    if (b[orderBy] > a[orderBy]) {
        return 1;
    }

    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySort(agents, sort) {
    const [orderBy, order] = sort.split('|');
    const comparator = getComparator(order, orderBy);
    const stabilizedThis = agents.map((el, index) => [el, index]);

    stabilizedThis.sort((a, b) => {
        // eslint-disable-next-line no-shadow
        const order = comparator(a[0], b[0]);

        if (order !== 0) return order;

        return a[1] - b[1];
    });

    return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
    root: {},
    queryField: {
        width: 500
    },
    bulkOperations: {
        position: 'relative'
    },
    bulkActions: {
        paddingLeft: 4,
        paddingRight: 4,
        marginTop: 6,
        position: 'absolute',
        width: '100%',
        zIndex: 2,
        backgroundColor: theme.palette.background.default
    },
    bulkAction: {
        marginLeft: theme.spacing(2)
    },
    avatar: {
        height: 42,
        width: 42,
        marginRight: theme.spacing(1)
    }
}));

function Results({ className, agents, ...rest }) {
    const classes = useStyles();
    const [currentTab, setCurrentTab] = useState('all');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState(sortOptions[0].value);
    const [filters, setFilters] = useState({
        isProspect: null,
        isReturning: null,
        acceptsMarketing: null
    });

    const handleTabsChange = (event, value) => {
        const updatedFilters = {
            ...filters,
            isProspect: null,
            isReturning: null,
            acceptsMarketing: null
        };

        if (value !== 'all') {
            updatedFilters[value] = true;
        }

        setFilters(updatedFilters);
        setSelectedUsers([]);
        setCurrentTab(value);
    };

    const handleQueryChange = (event) => {
        event.persist();
        setQuery(event.target.value);
    };

    const handleSortChange = (event) => {
        event.persist();
        setSort(event.target.value);
    };

    const handleSelectAllUsers = (event) => {
        setSelectedUsers(event.target.checked
            ? agents.map((user) => user.id)
            : []);
    };

    const handleSelectOneUser = (event, identifier) => {
        if (!selectedUsers.includes(identifier)) {
            setSelectedUsers((prevSelected) => [...prevSelected, identifier]);
        } else {
            setSelectedUsers((prevSelected) => prevSelected.filter((serial) => serial !== identifier));
        }
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    // Usually query is done on backend with indexing solutions
    const filteredUsers = applyFilters(agents, query, filters);
    const sortedUsers = applySort(filteredUsers, sort);
    const paginatedUsers = applyPagination(sortedUsers, page, limit);
    const enableBulkOperations = selectedUsers.length > 0;
    const selectedSomeUsers = selectedUsers.length > 0 && selectedUsers.length < agents.length;
    const selectedAllUsers = selectedUsers.length === agents.length;

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <Box
                p={2}
                minHeight={56}
                display="flex"
                alignItems="center"
            >
                <TextField
                    className={classes.queryField}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SvgIcon
                                    fontSize="small"
                                    color="action"
                                >
                                    <SearchIcon />
                                </SvgIcon>
                            </InputAdornment>
                        )
                    }}
                    onChange={handleQueryChange}
                    placeholder="Search users"
                    value={query}
                    variant="outlined"
                />
                <Box flexGrow={1} />
                <TextField
                    label="Sort By"
                    name="sort"
                    onChange={handleSortChange}
                    select
                    SelectProps={{ native: true }}
                    value={sort}
                    variant="outlined"
                >
                    {sortOptions.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Box>
            {enableBulkOperations && (
                <div className={classes.bulkOperations}>
                    <div className={classes.bulkActions}>
                        <Checkbox
                            checked={selectedAllUsers}
                            indeterminate={selectedSomeUsers}
                            onChange={handleSelectAllUsers}
                        />
                        <Button
                            variant="outlined"
                            className={classes.bulkAction}
                        >
                            Delete
                        </Button>
                        <Button
                            variant="outlined"
                            className={classes.bulkAction}
                        >
                            Edit
                        </Button>
                    </div>
                </div>
            )}
            <PerfectScrollbar>
                <Box minWidth={700}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedAllUsers}
                                        indeterminate={selectedSomeUsers}
                                        onChange={handleSelectAllUsers}
                                    />
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Age
                                </TableCell>
                                <TableCell>
                                    Address
                                </TableCell>
                                <TableCell>
                                    Phone Number
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell align="right">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paginatedUsers.map((user) => {
                                const isUserSelected = selectedUsers.includes(user.id);

                                return (
                                    <TableRow
                                        hover
                                        key={user.serial}
                                        selected={isUserSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={isUserSelected}
                                                onChange={(event) => handleSelectOneUser(event, user.serial)}
                                                value={isUserSelected}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                            >
                                                <Avatar
    className={classes.avatar}
    src={user.avatar}
>
    {user.name}
</Avatar>
<div>
<Link
    color="inherit"
    component={RouterLink}
                                        to={`/app/management/agents/${user.id}`}
     variant="h6"
                                                    >
                                                        {user.name}
                                                    </Link>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                    >
                                                        {user.gender}
                                                    </Typography>
                                                </div>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            {user.age}
                                        </TableCell>
                <TableCell>
            {user.address} , {user.city}
         </TableCell>
                <TableCell>
                    {user.phone}
         </TableCell>
            <TableCell>
                    {user.email}
                                        </TableCell>
            <TableCell align="right">
                <IconButton
                                                component={RouterLink}
                                                to={`/app/management/users/${user.serial}/edit`}
                                            >
                                                <SvgIcon fontSize="small">
                                                    <EditIcon />
                                                </SvgIcon>
                                            </IconButton>
                                            <IconButton
                                                component={RouterLink}
                                                to={`/app/management/users/${user.serial}`}
                                            >
                                                <SvgIcon fontSize="small">
                                                    <ArrowRightIcon />
                                                </SvgIcon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <TablePagination
                component="div"
                count={filteredUsers.length}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    );
}

Results.propTypes = {
    className: PropTypes.string,
    users: PropTypes.array
};

Results.defaultProps = {
    users: []
};

export default Results;
