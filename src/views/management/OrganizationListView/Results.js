import React, { useState } from 'react';
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
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';


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

function Results({ className, organizations, ...rest }) {
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const [sort, setSort] = useState(sortOptions[0].value);

    const [selectedUsers, setSelectedUsers] = useState([]);

    console.log(organizations);

    const handleQueryChange = (event) => {
        event.persist();
        setQuery(event.target.value);
    };


    const handleSortChange = (event) => {
        event.persist();
        setSort(event.target.value);
    };

    const enableBulkOperations = selectedUsers.length > 0;


    return (
        <Card className={clsx(classes.root, className)}
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
                        // checked={selectedAllUsers}
                        // indeterminate={selectedSomeUsers}
                        // onChange={handleSelectAllUsers}
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
                <Checkbox/>
                </TableCell>
                <TableCell>
                    Name
                </TableCell>
                <TableCell>
                    Capacity
                </TableCell>
                <TableCell>
                    City
                </TableCell>
                <TableCell>
                    Contact
                </TableCell>
                <TableCell>
                    Specialities
                </TableCell>
                <TableCell>
                    Amount
                </TableCell>
                </TableRow>
                </TableHead>
               <TableBody>
            {
            organizations.map((organization) => {
            return (
            <TableRow hover key={organization.id}>
            <TableCell padding="checkbox">
                                                <Checkbox />
            </TableCell>
                <TableCell>
                                                <Box
                                                    display="flex"
                                                    alignItems="center"
                                                >
                                                    <Avatar
                                                        className={classes.avatar}
                                src={organization.avatar}
                                                    >
                                {organization.name}
                                                    </Avatar>
                                                    <div>
                                                        <Link color="inherit"
                                                            component={RouterLink}
                                    to={`/app/management/users/${organization.id}`}
                                                            variant="h6"
                                                        >
                                    {organization.name}
                                                        </Link>
                                                    </div>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                        {organization.capacity} BDT
                                            </TableCell>
                                            <TableCell>
                        {organization.city}
                        </TableCell>
                    <TableCell>
                        {organization.contact}
                    </TableCell>
                    <TableCell>
                        {organization.specialities}
                    </TableCell>
                    <TableCell>
                        {organization.amounts}
                    </TableCell>
                    </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
        </Card>
    )
}

export default Results;
